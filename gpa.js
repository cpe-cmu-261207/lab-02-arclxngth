class SubjectList{
    constructor(code, name, credit, grade){
        this.code = +code
        this.name = name
        this.credit = +credit
        this.grade = +grade
//        this.semister = +semister
    }
}

const arr = []

const data = document.getElementById("sub_btn")
data.addEventListener("click", function(){
    const code = document.getElementById("sub_id")
    const name = document.getElementById("name")
    const credit = document.getElementById("credit")
    const grade = document.getElementById("grade2")
    let grade_num  

    switch(grade.value){
        case 1:  grade_num = 4; break;
        case 2:  grade_num = 3.5; break;
        case 3:  grade_num = 3; break;
        case 4:  grade_num = 2.5; break;
        case 5:  grade_num = 2; break;
        case 6:  grade_num = 1.5; break;
        case 7:  grade_num = 1; break;
        case 8:  grade_num = 0; break;
    }
    
    arr.push(new SubjectList(code.value ,name.value, credit.value, grade_num))

    code.value = ""
    name.value = ""
    credit.value = ""
    grade.value = ""
})

const eval = document.getElementById("eval_btn")
eval.addEventListener("click", function(){
    let sum_credit = arr.reduce(function(acc, obj) {
        return acc += obj.credit;
    }, 0)
    let score = 0, major_credit, major_score

    arr.forEach(function(sub_list){
        score += (sub_list.grade * sub_list.credit)
    })

    arr.forEach(function(sub_list){
        if((sub_list.code/1000 ) == 261 || (sub_list.code/1000 ) == 269){
            major_credit += sub_list.credit
            majot_score += sub_list.score
        }
    })

    let gpa = score / sum_credit
    let major_gpa = major_score / major_credit

    alert(gpa)
})

