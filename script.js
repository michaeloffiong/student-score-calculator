const rows = document.querySelectorAll("tbody tr");

rows.forEach(function(row) {

    const ca1 = row.querySelector(".ca1");
    const ca2 = row.querySelector(".ca2");
    const ca3 = row.querySelector(".ca3");
    const exam = row.querySelector(".exam");

    const total = row.querySelector(".total");
    const grade = row.querySelector(".grade");

    const inputs = row.querySelectorAll("input");

    inputs.forEach(function(input) {

        input.addEventListener("input", function() {

            const score1 = Number(ca1.value);
            const score2 = Number(ca2.value);
            const score3 = Number(ca3.value);
            const examScore = Number(exam.value);

            const totalScore = score1 + score2 + score3 + examScore;

            total.textContent = totalScore;

            let studentGrade;

            if (totalScore >= 70) {
                studentGrade = "A";
            } else if (totalScore >= 60) {
                studentGrade = "B";
            } else if (totalScore >= 50) {
                studentGrade = "C";
            } else if (totalScore >= 45) {
                studentGrade = "D";
            } else if (totalScore >= 40) {
                studentGrade = "E";
            } else {
                studentGrade = "F";
            }

            grade.textContent = studentGrade;
        });

    });

});