class SubjectList {
    constructor(code, name, credit, grade, semister) {
        this.code = +code;
        this.name = name;
        this.credit = +credit;
        this.grade = +grade;
        this.semister = +semister;
    }
}

let arr = [];

const data = document.getElementById("sub_btn");
data.addEventListener("click", function () {
    const code = document.getElementById("sub_id");
    const name = document.getElementById("name");
    const credit = document.getElementById("credit");
    const grade = document.getElementById("grade");
    const semister = document.getElementById("semister");
    let list = document.getElementById("list");
    let grade_num = 0;
    let grade_txt = "";
    let semister_txt = "";

    const element = document.createElement("li");

    if (
        code.value == "" ||
        name.value == "" ||
        credit.value == "-1" ||
        grade.value == "-1" ||
        semister.value == "-1"
    ) {
        element.textContent = "Plese input the value";
        list.append(element);
    } else {
        switch (semister.value) {
            case "1":
                semister_txt = "2/2563";
                break;
            case "2":
                semister_txt = "1/2563";
                break;
            case "3":
                semister_txt = "2/2562";
                break;
            case "4":
                semister_txt = "1/2562";
                break;
            case "5":
                semister_txt = "2/2561";
                break;
            case "6":
                semister_txt = "1/2561";
                break;
            case "7":
                semister_txt = "2/2560";
                break;
            case "8":
                semister_txt = "1/2560";
                break;
        }
        switch (grade.value) {
            case "1": {
                grade_num = 4;
                grade_txt = "A";
                break;
            }
            case "2": {
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
                grade_txt = "C+";
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

        element.textContent =
            "Subject's Code : " +
            code.value +
            " Name : " +
            name.value +
            " Credit : " +
            credit.value +
            " Grade : " +
            grade_txt +
            " [" +
            semister_txt +
            "] ";
        list.append(element);

        arr.push(
            new SubjectList(
                code.value,
                name.value,
                credit.value,
                grade_num,
                semister.value
            )
        );

        code.value = "";
        name.value = "";
        credit.value = "";
        grade.value = "";
        semister.value = "";
    }
});

const eval = document.getElementById("eval_btn");
eval.addEventListener("click", function () {
    const wanted_semister = document.getElementById("wanted_semister");
    let list = document.getElementById("list");

    const element = document.createElement("li");

    if (wanted_semister.value == "-1") {
        element.textContent = "Plese input semister for calculation";
        list.append(element);
    } else {
        if (document.getElementById("all").checked) {
            let sum_credit = 0,
                sum_score = 0,
                gpa;

            arr.forEach(function (sub_list) {
                if (wanted_semister.value == sub_list.semister)
                    sum_score += sub_list.grade * sub_list.credit;
                sum_credit += sub_list.credit;
            });
            if (sum_credit == 0) sum_credit++;
            gpa = sum_score / sum_credit;

            const gpa_str = document.createElement("li");
            gpa_str.textContent = "Your GPA is " + gpa.toFixed(2);
            list.append(gpa_str);
        } else {
            let major_credit = 0,
                major_score = 0,
                major_gpa;

            arr.forEach(function (sub_list) {
                if ((sub_list.code/1000).toFixed(0) == 261 || (sub_list.code/1000).toFixed(0) == 269) {
                    major_credit += sub_list.credit;
                    major_score += sub_list.grade * sub_list.credit;
                }
            });
            if (major_credit == 0) major_credit++;
            major_gpa = major_score / major_credit;

            const major_gpa_str = document.createElement("li");

            major_gpa_str.textContent = "Your Major GPA is " + major_gpa.toFixed(2);
            list.append(major_gpa_str);
        }
    }
});

const clear = document.getElementById("clear_btn");
clear.addEventListener("click", function () {
    document.getElementById("list").innerHTML = "";
    arr = [];
    major_gpa =0;
    sum_score = 0;
    list.removeChild()
});
