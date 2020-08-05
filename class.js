class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Biddapit School'
    }
}

const student1 = new Student(12, 'Ashfaque');
const student2 = new Student(22, 'Mahi');
console.log(student1.name, student2.name);