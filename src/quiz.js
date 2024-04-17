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



    // 7. filterQuestionsByDifficulty()

    filterQuestionsByDifficulty(difficulty) {

        if (isNaN(difficulty) || !(difficulty) > 0 && difficulty < 4 || typeof difficulty != "number") {
            return
        }

        const difficultQuestions = this.questions.filter((eachQuestion) => {
            if (eachQuestion.difficulty === difficulty) {
                return true
            } else {
                return false
            }

        })

        this.questions = difficultQuestions

    }




    // 8. averageDifficulty()

    averageDifficulty() {

        const sumDifficulties = this.questions.reduce((acc, eachQuestion) => {
            return acc + eachQuestion.difficulty
        }, 0)

        const diffAverage = sumDifficulties / this.questions.length
        return diffAverage
    }

}