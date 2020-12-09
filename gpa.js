class SubjectList{
    constructor(code, name, credit, grade, semister){
        this.code = +code
        this.name = name
        this.credit = +credit
        this.grade = +grade
        this.semister = +semister
    }
}

const arr = []

const data = document.getElementById("sub_btn")
data.addEventListener("click", function(){
    const code = document.getElementById("sub_id")
    const name = document.getElementById("name")
    const credit = document.getElementById("credit")
    const grade = document.getElementById("grade")
    const semister = document.getElementById("semister")
    let list = document.getElementById("list")
    let grade_num = 0
    let grade_txt = ""

    const element = document.createElement("li")

    switch(grade.value){
        case "1":  {
            grade_num = 4; 
            grade_txt = "A";
            break;
        }
        case "2":  {
            grade_num = 3.5; 
            grade_txt = "B+";
            break;
        }
        case "3": { 
            grade_num = 3; 
            grade_txt = "B";
            break;
        }
        case "4": { 
            grade_num = 2.5; 
            grade_txt = "C+"
            break;
        }
        case "5": { 
            grade_num = 2; 
            grade_txt = "C";
            break;
        }
        case "6": { 
            grade_num = 1.5; 
            grade_txt = "D+";
            break;
        }
        case "7": { 
            grade_num = 1;
            grade_txt = "D";
            break;
            }
        case "8": { 
            grade_num = 0; 
            grade_txt = "F";
            break;
        }   
    }
    element.textContent = "Subject's Code : " + code.value + " Name : " + name.value + " Credit : " + credit.value + " Grade : " + grade_txt + " [" + semister.value + "] " 
    list.append(element)

    arr.push(new SubjectList(code.value ,name.value, credit.value, grade_num, semister.value))

    code.value = ""
    name.value = ""
    credit.value = ""
    grade.value = ""
    semister.value = ""
})

const eval = document.getElementById("eval_btn")
eval.addEventListener("click", function(){
    let list = document.getElementById("list")
    let sum_credit = arr.reduce(function(acc, obj) {
        return acc += obj.credit;
    }, 0)
    let score = 0, major_credit = 0, major_score = 0

    arr.forEach(function(sub_list){
        score += (sub_list.grade * sub_list.credit)
    })

    arr.forEach(function(sub_list){
        if((sub_list.code/1000 ) == 261 || (sub_list.code/1000 ) == 269){
            major_credit += sub_list.credit
            majot_score += sub_list.score
        }
    })
    
    if(major_credit == 0) major_credit++;
    if(sum_credit == 0) sum_credit++;

    let gpa = score / sum_credit
    let major_gpa = major_score / major_credit

    const gpa_str = document.createElement("li")
    const major_gpa_str = document.createElement("li")

    gpa_str.textContent = "Your GPA is " + gpa.toFixed(2)
    major_gpa_str.textContent = "Your major GPA is " + major_gpa.toFixed(2)

    list.append(gpa_str)
    list.append(major_gpa_str)
})

