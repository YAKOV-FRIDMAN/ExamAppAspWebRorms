 
export class Quiz {
    constructor(qutions , name) {
        //score of quiz for current state
        this.score = 0;
        //array of Question(question.js)
        this.questions = qutions;
        this.name = name;

        this.customScoreAll = 0;
        //current index of quiz question in array of questions
        this.currentIndex = 0;
    }

     getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }
      getQuestionByIndex (index) {
        if ((index >= 0) && (index < this.questions.length))
            return this.questions[index];
    }
    isStarted() {
        return (this.currentIndex === 0);
    }
    isEnded() {
        return (this.currentIndex === this.questions.length);
    }

     

    guessAnswer(chisedAnswer) {
        if (this.questions[this.currentIndex].isCorrectAnswer(chisedAnswer)) {
            this.customScoreAll += this.questions[this.currentIndex].customScore;
            this.score++;
        }

        this.currentIndex++;
    }
}
    