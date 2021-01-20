
 
export class Question {

    constructor(text, choices, answer, customScore) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.customScore = customScore;
    }

    isCorrectAnswer(choisedAnswer) {
        return (this.answer === choisedAnswer);
    }

}
