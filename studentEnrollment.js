let DSA = [];
let WebDev = [];

function mainMenu() {
    let subjectChoice = prompt("Select the subject:\n(A) DSA\n(B) WebDev\n(C) Exit");
    switch (subjectChoice.toUpperCase()) {
        case 'A':
            manageSubject(DSA, "DSA");
            break;
        case 'B':
            manageSubject(WebDev, "WebDev");
            break;
        case 'C':
            exitProgram();
            break;
        default:
            alert("Invalid choice. Try again.");
            mainMenu();
    }
}

function manageSubject(subjectArray, subjectName) {
    let operation = prompt(Subject: ${subjectName}\nChoose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit);
    switch (operation.toUpperCase()) {
        case 'A':
            enrollStudent(subjectArray);
            manageSubject(subjectArray, subjectName);
            break;
        case 'B':
            unenrollStudent(subjectArray);
            manageSubject(subjectArray, subjectName);
            break;
        case 'C':
            mainMenu();
            break;
        case 'D':
            exitProgram();
            break;
        default:
            alert("Invalid choice. Try again.");
            manageSubject(subjectArray, subjectName);
    }
}

function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student to enroll:");
    if (studentName) {
        subjectArray.push(studentName);
        alert(${studentName} has been enrolled.);
    } else {
        alert("Invalid name. Try again.");
    }
}

function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        alert("No students are currently enrolled.");
        return;
    }
    alert(Currently enrolled students: ${subjectArray.join(", ")});
    let studentName = prompt("Enter the name of the student to unenroll:");
    let index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index, 1);
        alert(${studentName} has been unenrolled.);
    } else {
        alert("Student not found. Try again.");
    }
}

function exitProgram() {
    alert(Final Enrollment:\nDSA: ${DSA.join(", ")}\nWebDev: ${WebDev.join(", ")});
    alert("Exiting program. Goodbye!");
}
