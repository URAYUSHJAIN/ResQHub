document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#preparedness-quiz-form');
  const resultContainer = document.querySelector('#quiz-results');

  if (!form || !resultContainer) return;

  const questions = [
    { id: 'question1', text: 'Do you have a 3-day water supply?' },
    { id: 'question2', text: 'Do you have a family evacuation plan?' },
    { id: 'question3', text: 'Do you have an emergency kit ready?' },
    { id: 'question4', text: 'Have you taken first aid training?' },
    { id: 'question5', text: 'Do you have a family communication plan?' }
  ];

  function calculateScore(formData) {
    let yesCount = 0;
    questions.forEach((q) => {
      const val = formData.get(q.id);
      if (val === 'yes') yesCount += 1;
    });
    return yesCount * 20; // 5 questions * 20 = 100
  }

  function feedbackForScore(score) {
    if (score <= 40) return { title: "Let's get you prepared!", detail: 'Start with a basic kit and family plan.' };
    if (score === 60) return { title: "You're on your way!", detail: 'A few more steps and you will be well prepared.' };
    if (score >= 80) return { title: 'Great job! You\'re well prepared!', detail: 'Keep supplies fresh and review your plan regularly.' };
    return { title: 'Good work', detail: '' };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    // Validation: ensure each question has an answer
    const missing = questions.filter(q => !fd.has(q.id)).map(q => q.id);
    if (missing.length > 0) {
      resultContainer.innerHTML = `
        <p class="text-red-400 font-medium">Please answer all questions before submitting the quiz.</p>
      `;
      resultContainer.classList.remove('hidden');
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const score = calculateScore(fd);
    const fb = feedbackForScore(score);

    resultContainer.innerHTML = `
      <h3 class="text-xl font-medium text-white mb-2">Your score: ${score}/100</h3>
      <p class="text-purple-400 font-medium">${fb.title}</p>
      <p class="mt-2 text-gray-400">${fb.detail}</p>
      ${score <= 40 ? '<p class="mt-4"><a href="prep.html" class="inline-block mt-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">Start a Preparedness Plan</a></p>' : ''}
    `;

    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
