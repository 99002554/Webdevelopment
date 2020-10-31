var Student = function(name,city){
    this.name=name;
    this.city=city;
    this.getdetails = function(){
        console.log(this.name,this.city);
    }
}
student=new Student('Raj','Mysore');
console.log(student.name,student.city);
student.getdetails();

Student.prototype.age=20;
Student.prototype.greet= function(message){
    console.log(message,this.name);
}
console.log(student.age);
student.greet('Welcome ');

student1= new Student('Ram','Ooty');
student1.age=30;
student1.greet('great day');
console.log(student1.name,student1.city,student1.age);


