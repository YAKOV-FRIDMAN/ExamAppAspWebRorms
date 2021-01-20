
export class Exam {
    constructor(quize) {
        this.quize = quize;
       // this.name = name;
    }

    getQuizQuestionsByName(name) {
        for (var i = 0; i < this.quize.length; i++) {
            if (this.quize[i].name === name)
                return this.quize[i];
        }
    }
    getAllQuizQuestionsName() {
        return this.quize;
    }
   

}