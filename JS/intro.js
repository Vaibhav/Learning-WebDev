// Javascript Notes

// Objects:
var gradeBook = {

    // private member
    _grades : [],

    addGrade: function(newGrade){
        this._grades.push(newGrade);
    },

    getAverageGrade: function(){
        total = 0;
        for(var i = 0; i < this._grades.length; i+=1){
            total += this._grades[i];
        }
        return total / this._grades.length;
    },

    getCountOfGrades: function(){
        return this._grades.length;
    },

    reset: function() {
        while(this._grades.length > 0) {
            this._grades.pop();
        }
    }
};

exports.book = gradeBook;

// Express JS
