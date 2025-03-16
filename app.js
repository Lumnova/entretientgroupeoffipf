/**
 * Script principal pour le questionnaire d'entretien
 */

// Variables globales
let candidatInfo = {
    name: '',
    discord: '',
    group: ''
};

// Variables pour les questions de présentation
let currentPresentationQuestionIndex = 0;
let presentationAnswers = new Array(presentationQuestions.length).fill('');

// Variables pour les questions de RP
let currentRPQuestionIndex = 0;
let rpAnswers = new Array(rpQuestions.length).fill('');

// Variables pour les questions de règlement
let currentReglementQuestionIndex = 0;
let selectedReglementQuestions = [];
let reglementAnswers = new Array(20).fill(null);
let reglementHistory = [];
let reglementScore = 0;

// Fonction d'initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les gestionnaires d'événements
    initEventListeners();
});

// Initialiser les gestionnaires d'événements
function initEventListeners() {
    // Formulaire initial
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', handleStartButtonClick);
    }

    // Section de présentation
    const prevPresentationButton = document.getElementById('prevPresentationQuestion');
    const nextPresentationButton = document.getElementById('nextPresentationQuestion');
    const nextSectionButton = document.getElementById('nextSection');

    if (prevPresentationButton) {
        prevPresentationButton.addEventListener('click', handlePrevPresentationClick);
    }

    if (nextPresentationButton) {
        nextPresentationButton.addEventListener('click', handleNextPresentationClick);
    }

    if (nextSectionButton) {
        nextSectionButton.addEventListener('click', handleNextSectionClick);
    }

    // Section RP
    const prevRPButton = document.getElementById('prevRPQuestion');
    const nextRPButton = document.getElementById('nextRPQuestion');
    const nextSectionReglementButton = document.getElementById('nextSectionReglement');

    if (prevRPButton) {
        prevRPButton.addEventListener('click', handlePrevRPClick);
    }

    if (nextRPButton) {
        nextRPButton.addEventListener('click', handleNextRPClick);
    }

    if (nextSectionReglementButton) {
        nextSectionReglementButton.addEventListener('click', handleNextSectionReglementClick);
    }

    // Modal de débriefing
    const startQuestionsButton = document.getElementById('startQuestions');
    if (startQuestionsButton) {
        startQuestionsButton.addEventListener('click', handleStartQuestionsClick);
    }

    // Section Règlement
    const validateReglementButton = document.getElementById('validateReglement');
    if (validateReglementButton) {
        validateReglementButton.addEventListener('click', handleValidateReglementClick);
    }
}

// Gestionnaire pour le bouton de démarrage
function handleStartButtonClick() {
    // Récupérer les informations du candidat
    const nameInput = document.getElementById('candidatName');
    const discordInput = document.getElementById('candidatDiscord');
    const groupSelect = document.getElementById('candidatGroup');

    // Vérifier que tous les champs sont remplis
    if (!nameInput.value || !discordInput.value || !groupSelect.value) {
        Swal.fire({
            title: 'Attention !',
            text: 'Veuillez remplir tous les champs avant de commencer.',
            icon: 'warning',
            confirmButtonText: 'Compris'
        });
        return;
    }

    // Enregistrer les informations
    candidatInfo.name = nameInput.value;
    candidatInfo.discord = discordInput.value;
    candidatInfo.group = groupSelect.value;

    // Afficher le modal de débriefing
    document.getElementById('initialForm').classList.add('hidden');
    document.getElementById('debriefModal').classList.remove('hidden');
}

// Gestionnaire pour le bouton de démarrage des questions
function handleStartQuestionsClick() {
    // Cacher le modal de débriefing
    document.getElementById('debriefModal').classList.add('hidden');
    
    // Afficher la section des questions de présentation
    document.getElementById('questionsSection').classList.remove('hidden');
    
    // Afficher la première question de présentation
    showPresentationQuestion();
}

// Afficher la question de présentation courante
function showPresentationQuestion() {
    const container = document.getElementById('presentationContainer');
    if (!container) return;

    const currentQuestion = presentationQuestions[currentPresentationQuestionIndex];
    
    container.innerHTML = `
        <div class="question-card p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>
            <textarea 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                placeholder="Votre réponse..."
            >${presentationAnswers[currentPresentationQuestionIndex]}</textarea>
        </div>
    `;

    // Ajouter l'écouteur d'événement pour le textarea
    const textarea = container.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', (e) => {
            presentationAnswers[currentPresentationQuestionIndex] = e.target.value;
        });
    }

    // Mettre à jour l'état des boutons
    updatePresentationButtons();
}

// Mettre à jour l'état des boutons de navigation pour les questions de présentation
function updatePresentationButtons() {
    const prevButton = document.getElementById('prevPresentationQuestion');
    const nextButton = document.getElementById('nextPresentationQuestion');
    const nextSectionButton = document.getElementById('nextSection');

    if (prevButton) {
        prevButton.disabled = currentPresentationQuestionIndex === 0;
        prevButton.classList.toggle('opacity-50', currentPresentationQuestionIndex === 0);
        prevButton.classList.toggle('cursor-not-allowed', currentPresentationQuestionIndex === 0);
    }

    if (nextButton) {
        nextButton.disabled = currentPresentationQuestionIndex === presentationQuestions.length - 1;
        nextButton.classList.toggle('opacity-50', currentPresentationQuestionIndex === presentationQuestions.length - 1);
        nextButton.classList.toggle('cursor-not-allowed', currentPresentationQuestionIndex === presentationQuestions.length - 1);
    }

    if (nextSectionButton) {
        const allAnswered = presentationAnswers.every(answer => answer.trim() !== '');
        nextSectionButton.disabled = !allAnswered;
        nextSectionButton.classList.toggle('opacity-50', !allAnswered);
        nextSectionButton.classList.toggle('cursor-not-allowed', !allAnswered);
    }
}

// Gestionnaire pour le bouton précédent des questions de présentation
function handlePrevPresentationClick() {
    if (currentPresentationQuestionIndex > 0) {
        currentPresentationQuestionIndex--;
        showPresentationQuestion();
    }
}

// Gestionnaire pour le bouton suivant des questions de présentation
function handleNextPresentationClick() {
    if (currentPresentationQuestionIndex < presentationQuestions.length - 1) {
        currentPresentationQuestionIndex++;
        showPresentationQuestion();
    }
}

// Gestionnaire pour le bouton de section suivante (après les questions de présentation)
function handleNextSectionClick() {
    // Vérifier que toutes les questions ont été répondues
    const allAnswered = presentationAnswers.every(answer => answer.trim() !== '');
    
    if (!allAnswered) {
        Swal.fire({
            title: 'Attention !',
            text: 'Veuillez répondre à toutes les questions avant de passer à la section suivante.',
            icon: 'warning',
            confirmButtonText: 'Compris'
        });
        return;
    }

    // Cacher la section des questions de présentation
    document.getElementById('questionsSection').classList.add('hidden');
    
    // Afficher la section des questions de RP
    document.getElementById('rpSection').classList.remove('hidden');
    
    // Afficher la première question de RP
    showRPQuestion();
}

// Afficher la question de RP courante
function showRPQuestion() {
    const container = document.getElementById('rpContainer');
    if (!container) return;

    const currentQuestion = rpQuestions[currentRPQuestionIndex];
    
    container.innerHTML = `
        <div class="question-card p-6 bg-white border-l-4 border-purple-500 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">${currentQuestion.question}</h3>
            <textarea 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 min-h-[150px]"
                placeholder="Votre réponse..."
            >${rpAnswers[currentRPQuestionIndex]}</textarea>
        </div>
    `;

    // Ajouter l'écouteur d'événement pour le textarea
    const textarea = container.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', (e) => {
            rpAnswers[currentRPQuestionIndex] = e.target.value;
        });
    }

    // Mettre à jour l'état des boutons
    updateRPButtons();
}

// Mettre à jour l'état des boutons de navigation pour les questions de RP
function updateRPButtons() {
    const prevButton = document.getElementById('prevRPQuestion');
    const nextButton = document.getElementById('nextRPQuestion');
    const nextSectionButton = document.getElementById('nextSectionReglement');

    if (prevButton) {
        prevButton.disabled = currentRPQuestionIndex === 0;
        prevButton.classList.toggle('opacity-50', currentRPQuestionIndex === 0);
        prevButton.classList.toggle('cursor-not-allowed', currentRPQuestionIndex === 0);
    }

    if (nextButton) {
        nextButton.disabled = currentRPQuestionIndex === rpQuestions.length - 1;
        nextButton.classList.toggle('opacity-50', currentRPQuestionIndex === rpQuestions.length - 1);
        nextButton.classList.toggle('cursor-not-allowed', currentRPQuestionIndex === rpQuestions.length - 1);
    }

    if (nextSectionButton) {
        const allAnswered = rpAnswers.every(answer => answer.trim() !== '');
        nextSectionButton.disabled = !allAnswered;
        nextSectionButton.classList.toggle('opacity-50', !allAnswered);
        nextSectionButton.classList.toggle('cursor-not-allowed', !allAnswered);
    }
}

// Gestionnaire pour le bouton précédent des questions de RP
function handlePrevRPClick() {
    if (currentRPQuestionIndex > 0) {
        currentRPQuestionIndex--;
        showRPQuestion();
    }
}

// Gestionnaire pour le bouton suivant des questions de RP
function handleNextRPClick() {
    if (currentRPQuestionIndex < rpQuestions.length - 1) {
        currentRPQuestionIndex++;
        showRPQuestion();
    }
}

// Gestionnaire pour le bouton de section suivante (après les questions de RP)
function handleNextSectionReglementClick() {
    // Vérifier que toutes les questions ont été répondues
    const allAnswered = rpAnswers.every(answer => answer.trim() !== '');
    
    if (!allAnswered) {
        Swal.fire({
            title: 'Attention !',
            text: 'Veuillez répondre à toutes les questions avant de passer à la section suivante.',
            icon: 'warning',
            confirmButtonText: 'Compris'
        });
        return;
    }

    // Cacher la section des questions de RP
    document.getElementById('rpSection').classList.add('hidden');
    
    // Afficher la section des questions de règlement
    document.getElementById('reglementSection').classList.remove('hidden');
    
    // Initialiser les questions de règlement
    initReglementQuestions();
}

// Initialiser les questions de règlement
function initReglementQuestions() {
    // Sélectionner 20 questions aléatoires
    selectedReglementQuestions = getRandomQuestions(reglementQuestions, 20);
    
    // Réinitialiser les réponses et l'historique
    reglementAnswers = new Array(20).fill(null);
    reglementHistory = new Array(20).fill(null);
    currentReglementQuestionIndex = 0;
    reglementScore = 0;
    
    // Afficher la première question
    showCurrentReglementQuestion();
}

// Obtenir des questions aléatoires
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Afficher la question de règlement courante
function showCurrentReglementQuestion() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    const currentQ = selectedReglementQuestions[currentReglementQuestionIndex];
    if (!currentQ) return;

    // Utiliser le module horizontal-layout pour afficher la question
    const elements = HorizontalLayout.showQuestion(
        container,
        currentQ,
        currentReglementQuestionIndex,
        20,
        reglementAnswers,
        handleReglementAnswerChange
    );

    // Ajouter les écouteurs d'événements pour les boutons
    if (elements.prevButton) {
        elements.prevButton.addEventListener('click', handlePrevReglementClick);
    }
    
    if (elements.nextButton) {
        elements.nextButton.addEventListener('click', handleNextReglementClick);
    }
    
    // Mettre à jour le score
    if (elements.scoreElement) {
        elements.scoreElement.textContent = reglementScore.toString();
    }
}

// Gestionnaire pour le changement de réponse aux questions de règlement
function handleReglementAnswerChange(index, value) {
    reglementAnswers[index] = value;
    
    // Mettre à jour l'historique
    const currentQ = selectedReglementQuestions[index];
    reglementHistory[index] = {
        question: currentQ.question,
        answer: currentQ.answer,
        userAnswer: value
    };
    
    // Mettre à jour le score
    updateReglementScore();
    
    // Vérifier si toutes les questions ont été répondues
    checkAllReglementAnswered();
}

// Mettre à jour le score des questions de règlement
function updateReglementScore() {
    reglementScore = HorizontalLayout.calculateScore(reglementAnswers);
    
    const scoreElement = document.getElementById('currentScore');
    if (scoreElement) {
        scoreElement.textContent = reglementScore.toString();
    }
}

// Vérifier si toutes les questions de règlement ont été répondues
function checkAllReglementAnswered() {
    const validateButton = document.getElementById('validateReglement');
    if (!validateButton) return;
    
    HorizontalLayout.updateValidateButton(validateButton, reglementAnswers);
}

// Gestionnaire pour le bouton précédent des questions de règlement
function handlePrevReglementClick() {
    if (currentReglementQuestionIndex > 0) {
        currentReglementQuestionIndex--;
        showCurrentReglementQuestion();
    }
}

// Gestionnaire pour le bouton suivant des questions de règlement
function handleNextReglementClick() {
    if (currentReglementQuestionIndex < 19) {
        currentReglementQuestionIndex++;
        showCurrentReglementQuestion();
    }
}

// Gestionnaire pour le bouton de validation des questions de règlement
function handleValidateReglementClick() {
    // Vérifier que toutes les questions ont été répondues
    if (!HorizontalLayout.checkAllAnswered(reglementAnswers)) {
        Swal.fire({
            title: 'Attention !',
            text: 'Veuillez répondre à toutes les questions avant de valider.',
            icon: 'warning',
            confirmButtonText: 'Compris'
        });
        return;
    }

    // Générer le récapitulatif
    generateReglementSummary();
}

// Générer le récapitulatif des questions de règlement
function generateReglementSummary() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    const totalScore = reglementScore;
    const maxScore = 20;
    const percentage = (totalScore / maxScore) * 100;
    
    let successMessage = "";
    if (percentage >= 80) {
        successMessage = "Félicitations ! Vous avez réussi avec excellence.";
    } else if (percentage >= 60) {
        successMessage = "Bien joué ! Vous avez réussi avec une bonne note.";
    } else {
        successMessage = "Vous devez vous améliorer pour réussir ce test.";
    }
    
    let summaryHTML = `
        <div class="bg-white rounded-xl shadow-lg p-8 animate-fade">
            <h2 class="text-3xl font-bold text-center mb-6">Récapitulatif</h2>
            <div class="text-center mb-8">
                <p class="text-2xl font-bold">Score final : ${totalScore} / ${maxScore} points</p>
                <p class="text-xl mt-2">${successMessage}</p>
            </div>
            
            <div class="flex justify-center gap-4 mb-8">
                <button class="filter-btn px-4 py-2 bg-blue-600 text-white rounded-lg active" data-filter="all">Toutes les réponses</button>
                <button class="filter-btn px-4 py-2 bg-green-600 text-white rounded-lg" data-filter="correct">Correctes</button>
                <button class="filter-btn px-4 py-2 bg-yellow-600 text-white rounded-lg" data-filter="moyen">Moyennes</button>
                <button class="filter-btn px-4 py-2 bg-red-600 text-white rounded-lg" data-filter="incorrect">Incorrectes</button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="answersGrid">
                ${generateQuestionsHTML('all')}
            </div>
        </div>
    `;
    
    container.innerHTML = summaryHTML;
    
    // Cacher le bouton de validation
    const validateButton = document.getElementById('validateReglement');
    if (validateButton) {
        validateButton.classList.add('hidden');
    }
    
    // Ajouter les écouteurs d'événements pour les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Mettre à jour la classe active
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filtrer les questions
            const filter = e.target.dataset.filter;
            document.getElementById('answersGrid').innerHTML = generateQuestionsHTML(filter);
        });
    });
}

// Générer le HTML des questions filtrées
function generateQuestionsHTML(filter) {
    let html = '';
    
    reglementHistory.forEach((item, index) => {
        if (!item) return;
        
        const userAnswer = reglementAnswers[index];
        
        // Appliquer le filtre
        if (filter !== 'all') {
            if (filter !== userAnswer) return;
        }
        
        // Déterminer la couleur en fonction de la réponse
        let colorClass = '';
        let pointsText = '';
        
        if (userAnswer === 'correct') {
            colorClass = 'border-green-300 bg-green-50';
            pointsText = '1 point';
        } else if (userAnswer === 'moyen') {
            colorClass = 'border-yellow-300 bg-yellow-50';
            pointsText = '0.5 point';
        } else {
            colorClass = 'border-red-300 bg-red-50';
            pointsText = '0 point';
        }
        
        html += `
            <div class="border-2 ${colorClass} rounded-lg p-4 summary-card">
                <p class="font-bold mb-2">Question ${index + 1}</p>
                <p class="mb-2">${item.question}</p>
                <p class="font-medium">Réponse attendue : ${item.answer}</p>
                <p class="mt-2 font-medium">Votre évaluation : ${userAnswer} (${pointsText})</p>
            </div>
        `;
    });
    
    return html;
} 