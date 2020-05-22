// This is the quiz questions array.

const STORE = [
    {
        question: 'This city is the largest in Latin America and is home to the largest number of Japanese people outside of Asia. Name this city.',
        answers: [
            'São Paulo',
            'Rio de Janeiro',
            'Santiago',
            'Buenos Aires'
        ],
        correctAnswer: 'São Paulo',
        photo: 'photos/sao-paulo.jpg',
        photoAlt: 'A photograph of the São Paulo skyline at night.'
    },
    {
        question: 'Tapatío is the colloquial term from someone or something from this city in Mexico. Name this city.',
        answers: [
            'Mexico City',
            'Tijuana',
            'Monterrey',
            'Guadalajara'
        ],
        correctAnswer: 'Guadalajara',
        photo: 'photos/guadalajara.jpg',
        photoAlt: 'A photograph of a public square in Guadalajara.'
    },
    {
        question: 'This city was founded circa 600 BC as a Greek colony and now is the biggest port in France. Name this city.',
        answers: [
            'Paris',
            'Marseille',
            'Monaco',
            'Cannes'
        ],
        correctAnswer: 'Marseille',
        photo: 'photos/marseille.jpg',
        photoAlt: 'A photograph of the Marseille skyline.'
    },
    {
        question: 'This industrial port city in northern Spain is the de facto capital of Basque Country and home to this Frank Gehry-designed museum. Name this city.',
        answers: [
            'Madrid',
            'Barcelona',
            'Bilbao',
            'Santander'
        ],
        correctAnswer: 'Bilbao',
        photo: 'photos/bilbao.jpg',
        photoAlt: 'A photograph of the Guggenheim Museum Bilbao along the Estuary of Bilbao.'
    },
    {
        question: 'This city sits on a mountain ridge on the Greek island of Santorini and shares the same name of the volcano which famously erupted on the island in the middle Bronze Age. Name this city.',
        answers: [
            'Fira',
            'Oia',
            'Kamari',
            'Thera'
        ],
        correctAnswer: 'Thera',
        photo: 'photos/thera.jpg',
        photoAlt: 'A photograph looking at the Aegean Sea from a mountain ridge in Thera.'
    },
    {
        question: 'This seaport city in north-eastern Egypt sits at the south terminus of a famous canal. Name this city.',
        answers: [
            'Cairo',
            'Suez',
            'Port Said',
            'Alexandria'
        ],
        correctAnswer: 'Suez',
        photo: 'photos/suez.jpg',
        photoAlt: 'A photograph of two boats in the Suez canal.'
    },
    {
        question: 'This city in Morocco was founded in 1062 and is home to Jemaa el-Fnaa, which is one of the best-known squares in Africa. Name this city.',
        answers: [
            'Marrakesh',
            'Fes',
            'Casablanca',
            'Rabat'
        ],
        correctAnswer: 'Marrakesh',
        photo: 'photos/marrakesh.jpg',
        photoAlt: 'A photograph of the vast Jemaa el-Fnaa square and marketplace in Marrakesh.'
    },
    {
        question: 'This city is also known as Bombay and is the financial, commerical, and entertainment capital of India. Name this city.',
        answers: [
            'New Delhi',
            'Kolkata',
            'Chennai',
            'Mumbai'
        ],
        correctAnswer: 'Mumbai',
        photo: 'photos/mumbai.jpg',
        photoAlt: 'A photograph of the city and railroad in Mumbai.'
    },
    {
        question: 'This city is the capital of the People\'s Republic of China and is home Peking University and Tsinghua University. Name this city.',
        answers: [
            'Beijing',
            'Shanghai',
            'Hong Kong',
            'Guangzhou'
        ],
        correctAnswer: 'Beijing',
        photo: 'photos/beijing.jpg',
        photoAlt: 'A photograph of Beijing skyline at night.'
    },
    {
        question: 'This city is the capital of Indonesia and sits on the northwest coast of the world\'s most populous island of Java. Name this city.',
        answers: [
            'Semarang',
            'Jakarta',
            'Surabaya',
            'Padang'
        ],
        correctAnswer: 'Jakarta',
        photo: 'photos/jakarta.jpg',
        photoAlt: 'A photograph looking down at a busy street in Jakarta at night.'
    }
];

// These are the variables to store the quiz score and question number.
let score = 0;
let questionNumber = 0;
let incorrect = 0;

// This changes the photo.
function changePhoto(index) {
    const imgSource = STORE[index].photo;

    const imgAlt = STORE[index].photoAlt;

    $('.photoArea img').attr('src', imgSource).attr('alt', imgAlt);
}

// This is the template to create each question.
function createQuestion() {
    if (questionNumber < STORE.length) {
        return createForm(questionNumber);
    } else {
        $('.questionArea').hide();
        finalScore();
        $('.questionNumber').text(10);
    }
}

// This increments the number value of the "score" variable by one and updates the header text.
function updateScore() {
    score++;

    $('.score').text(score);
}

// This increments the number value of the "incorrect" variable by one and updates the header text.
function incorrectScore() {
    incorrect++;

    $('.incorrect').text(incorrect);
}

// This increments the number value of the "question number" variable by one and updates the header text.
function updateQuestionNumber() {
    questionNumber++;

    $('.questionNumber').text(questionNumber + 1);
}

// This resets the text value of the "question number" and "score" variables and updates the header text.
function resetStats() {
    score = 0;

    questionNumber = 0;

    $('.score').text(0);

    $('.questionNumber').text(0);
}

// This starts the quiz.
function startQuiz() {
    $('.altBox').hide();

    $('.startQuiz').on('click', '.startButton', function (event) {
        $('.startQuiz').hide();

        $('.final').hide();

        $('.questionNumber').text(1);

        $('.questionArea').show();

        $('.questionArea').prepend(createQuestion());

        const imgSource = STORE[0].photo;

        const imgAlt = STORE[0].photoAlt;

        $('.photoArea img').attr('src', imgSource).attr('alt', imgAlt);
    });
}

// This submits a selected answer and verifies it's correct.
function submitAnswer() {
    $('.questionArea').on('submit', function (event) {
        event.preventDefault();

        $('.altBox').hide();

        $('.response').show();

        let selected = $('input:checked');

        let answer = selected.val();

        let correct = STORE[questionNumber].correctAnswer;

        if (answer === correct) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });    
}

// This renders the question form.
function createForm(index) {
    let formMaker = $(`
        <form>
            <fieldset>
                <h2><legend class="questionText">${STORE[index].question}</legend></h2><br>
            </fieldset>
        </form>    
    `);

    let fieldSelector = $(formMaker).find('fieldset');

    STORE[index].answers.forEach(function (answerValue, answerIndex) {
        $(`
            <label for="${answerIndex}">
                <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
                <span>${answerValue}</span>
            </label>   
        `).appendTo(fieldSelector);
        });
    
    $(`<button type="submit" class="submitButton button">Submit</button>`).appendTo(fieldSelector);

    return formMaker;
}

// If the answer is correct, this responds and adds one to the score.
function correctAnswer() {
    $('.response').html(
        `<h2>Correct!</h2><br>
        <p>Well done globetrotter.</p>
        <button type="button" class="nextButton button">Next</button>`
    );

    updateScore();
}

// If the anwer is wrong, this responds with the correct answer.
function wrongAnswer() {
    $('.response').html(
        `<h2 class="wrong">That's the wrong city...</h2><br>
        <p>It's actually <b class="wrong">${STORE[questionNumber].correctAnswer}</b>. Don't worry, you'll get it next time.</p>
        <button type="button" class="nextButton button">Next</button>`
    );

    incorrectScore();
}

// This renders the next question.
function nextQuestion() {
    $('.response').on('click', '.nextButton', function (event) {
        $('.altBox').hide();
        $('.questionArea').show();
        updateQuestionNumber();
        $('.questionArea form').replaceWith(createQuestion());
        return changePhoto(questionNumber); 
    });
}

// This calculates the final score and tells the user how they did.
function finalScore() {
    const imgSource = "photos/globe.jpg";

    $('.photoArea img').attr('src', imgSource);
    
    $('.final').show();

    const great = [
        'Great job!',
        'You know your cities around the globe!'
      ];
    
      const good = [
        'You did a good job, but can do better.',
        'Keep traveling and learn more cities!'
      ];
    
      const bad = [
        'This isn\'t your best work.',
        'Keep trying, you\'ll get there!'
      ];
    
      if (score >= 8) {
        array = great;
      } else if (score < 8 && score >= 5) {
        array = good;
      } else {
        array = bad;
      }

    return $('.final').html(
        `<h1>${array[0]}</h1><br>
        <h2>Your score is ${score}0%.</h2><br>
        <p>${array[1]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
      );
}

// This restarts the quiz.
function restartQuiz() {
    $('.final').on('click', '.restartButton', function (event) {
    event.preventDefault();
    resetStats();
    $('.altBox').hide();
    $('.startQuiz').show();
  });
}

// This runs all of the functions above.
function runIt() {
    startQuiz();
    createQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(runIt);