/**
 * Script pour afficher les questions horizontalement
 * À inclure dans entretien.html
 */

// Fonction pour afficher la question courante horizontalement
function showQuestionHorizontal(container, question, index, total, answers, onAnswerChange) {
    if (!container || !question) return;
    
    // Créer la structure HTML horizontale
    container.innerHTML = `
        <div class="flex flex-row items-start justify-between gap-8 max-w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
            <!-- Section Question -->
            <div class="flex-1 min-w-0">
                <h3 class="text-3xl font-bold text-blue-800 mb-4">Question ${index + 1}/${total}</h3>
                <div class="text-xl font-medium text-gray-800 mb-6">${question.question}</div>
                <div class="bg-blue-50 p-6 rounded-lg">
                    <p class="text-lg font-medium text-blue-800">Réponse attendue :</p>
                    <p class="text-lg text-gray-700 mt-2">${question.answer}</p>
                </div>
            </div>

            <!-- Section Réponses -->
            <div class="flex-1 min-w-0">
                <div class="space-y-4">
                    <div class="flex items-center p-4 bg-white border-2 border-green-100 rounded-lg hover:border-green-300 transition-colors duration-200 group cursor-pointer">
                        <input type="radio" name="question_${index}" value="correct" 
                            class="w-6 h-6 text-green-600 answer-radio border-green-300 focus:ring-green-500"
                            ${answers[index] === 'correct' ? 'checked' : ''}>
                        <label class="ml-4 flex-grow cursor-pointer">
                            <span class="text-lg font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                                Correct (1 point)
                            </span>
                        </label>
                    </div>

                    <div class="flex items-center p-4 bg-white border-2 border-yellow-100 rounded-lg hover:border-yellow-300 transition-colors duration-200 group cursor-pointer">
                        <input type="radio" name="question_${index}" value="moyen" 
                            class="w-6 h-6 text-yellow-600 answer-radio border-yellow-300 focus:ring-yellow-500"
                            ${answers[index] === 'moyen' ? 'checked' : ''}>
                        <label class="ml-4 flex-grow cursor-pointer">
                            <span class="text-lg font-medium text-yellow-600 group-hover:text-yellow-700 transition-colors duration-200">
                                Moyennement (0.5 point)
                            </span>
                        </label>
                    </div>

                    <div class="flex items-center p-4 bg-white border-2 border-red-100 rounded-lg hover:border-red-300 transition-colors duration-200 group cursor-pointer">
                        <input type="radio" name="question_${index}" value="incorrect" 
                            class="w-6 h-6 text-red-600 answer-radio border-red-300 focus:ring-red-500"
                            ${answers[index] === 'incorrect' ? 'checked' : ''}>
                        <label class="ml-4 flex-grow cursor-pointer">
                            <span class="text-lg font-medium text-red-600 group-hover:text-red-700 transition-colors duration-200">
                                Incorrect (0 point)
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Section Navigation -->
            <div class="flex flex-col justify-between min-w-[200px]">
                <div class="text-xl font-bold text-blue-800 mb-4 text-center">
                    Score : <span id="currentScore">0</span> points
                </div>
                
                <div class="space-y-4">
                    <button id="prevQuestion" 
                        class="w-full px-8 py-3 text-lg bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-3"
                        ${index === 0 ? 'disabled' : ''}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Précédent
                    </button>

                    <button id="nextQuestion" 
                        class="w-full px-8 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-3"
                        ${index === total - 1 ? 'disabled' : ''}>
                        Suivant
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Ajouter les écouteurs d'événements
    container.querySelectorAll('.answer-radio').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (onAnswerChange) onAnswerChange(index, e.target.value);
        });
    });

    // Retourner les boutons pour la navigation
    return {
        prevButton: container.querySelector('#prevQuestion'),
        nextButton: container.querySelector('#nextQuestion'),
        scoreElement: container.querySelector('#currentScore')
    };
}

// Fonction pour calculer le score
function calculateScore(answers) {
    let score = 0;
    answers.forEach(answer => {
        if (answer === 'correct') score += 1;
        else if (answer === 'moyen') score += 0.5;
    });
    return score;
}

// Fonction pour vérifier si toutes les questions ont été répondues
function checkAllAnswered(answers) {
    return answers.every(answer => answer !== null);
}

// Fonction pour activer/désactiver le bouton de validation
function updateValidateButton(button, answers) {
    if (!button) return;
    
    const allAnswered = checkAllAnswered(answers);
    button.disabled = !allAnswered;
    
    if (allAnswered) {
        button.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        button.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

// Exporter les fonctions
window.HorizontalLayout = {
    showQuestion: showQuestionHorizontal,
    calculateScore: calculateScore,
    checkAllAnswered: checkAllAnswered,
    updateValidateButton: updateValidateButton
}; 