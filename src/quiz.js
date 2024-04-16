class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions //array
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }




    // 2. getQuestion()
    getQuestion() {
        //Nos mostrará el número de la pregunta actual
        const currentQuestion = this.questions[this.currentQuestionIndex]
        return currentQuestion

    }


    // 3. moveToNextQuestion()

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }



    // 4. shuffleQuestions()
    shuffleQuestions() {
        this.questions.sort((a, b) => 0.5 - Math.random())
    }



    // 5. checkAnswer(answer)
    checkAnswer(answerToCheck) {
        const currentQuestion = this.getQuestion() //Reutilizamos el metodo anteriormente usado y se lo asignamos a la variable

        if (answerToCheck === currentQuestion.answer) { //con el .answer accedemos a la propiedad answer del objeto Question
            this.correctAnswers++
        }
    }




    // 6. hasEnded()

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true
        }
    }
}