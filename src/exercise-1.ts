type Student = {
    name: string;
    score?: number;
}

const getResultMessage = (student: Student): string => {
    if (!student.score) {
        return `${student.name} has not taken the exam yet.`;
    } else if (student.score >= 60) {
        return `${student.name} passed the exam!`;
    } else{
        return `${student.name} failed the exam.`;
    }
};

const student1 = {
    name: "Taro",
    score: 75
}

const student2 = {
    name: "Hanako",
    score: 50
}

const student3 = {
    name: "Jiro",
}

console.log(getResultMessage(student1)); // Taro passed the exam!
console.log(getResultMessage(student2)); // Hanako failed the exam.
console.log(getResultMessage(student3)); // Jiro has not taken the exam yet.

