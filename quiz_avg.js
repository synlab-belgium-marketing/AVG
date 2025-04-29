let quizCompleted = false; // Indicateur de complétion

const quizData = [

    {
      question: "1. Wat zijn de belangrijkste doelstellingen van de AVG? <br> <span style='font-size:11px;'>*Selecteer alle juiste antwoorden.</span>",
        a: "Versterken van de bescherming van persoonlijke gegevens van EU-burgers.",
        b: "Bedrijven toestaan persoonlijke gegevens zonder toestemming te verkopen.",
        c: "De regels voor gegevensbescherming in de EU harmoniseren.",
        d: "De toegang van overheden tot persoonlijke gegevens vergemakkelijken.",
        correct: ["a", "c"]
    },

 {
	question: "2. Welke van de volgende voorstellen komen overeen met de fundamentele principes van de AVG? <br> <span style='font-size:11px;'>*Selecteer alle juiste antwoorden.</span>",
        a: "Patiëntgegevens moeten zo lang mogelijk veilig worden bewaard.",
        b: "Voorkomen dat overbodige gegevens worden verzameld.",
        c: "Gegevens moeten worden verzameld voor specifieke, expliciete en legitieme doeleinden.",
        d: "Gegevens niet corrigeren, zelfs als ze onjuist zijn.",
        correct: ["b", "c"]

},

 {
        question: "3. Identificeer de rechten van patiënten volgens de AVG uit de onderstaande opties: <br> <span style='font-size:11px;'>*Selecteer alle juiste antwoorden.</span>",
        a: "Toegang tot hun persoonlijke medische gegevens.",
        b: "Artsen verplichten hun gegevens zonder toestemming met derden te delen.",
        c: "Verzoek om correctie van hun onjuiste medische gegevens.",
        d: "Voorkomen dat ziekenhuizen medische gegevens verzamelen.",
        correct: ["a", "c"]
},


];

const quiz = document.getElementById('quiz');
const feedback = document.getElementById('feedback');
const submitBtn = document.querySelector('.submit-btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <ul class="options">
            <li><input type="checkbox" name="answer" value="a"> ${currentQuizData.a}</li>
            <li><input type="checkbox" name="answer" value="b"> ${currentQuizData.b}</li>
            <li><input type="checkbox" name="answer" value="c"> ${currentQuizData.c}</li>
            <li><input type="checkbox" name="answer" value="d"> ${currentQuizData.d}</li>
        </ul>
    `;
    feedback.innerHTML = '';
}

function submitQuiz() {
    const answers = document.querySelectorAll('input[name="answer"]:checked');
    const selectedAnswers = Array.from(answers).map(answer => answer.value);
    const correctAnswers = quizData[currentQuiz].correct;

    if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer))) {
        score++;
        currentQuiz++;
        feedback.innerHTML = ''; // Réinitialiser le feedback en cas de réponse correcte
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `Gefeliciteerd! U heeft deze training voltooid. <br> Wij danken u voor uw inzet en deelname.`;
            submitBtn.style.display = 'none';
        }
    } else {
        feedback.innerHTML = 'Onjuist antwoord, probeer het opnieuw.';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
