// frontend
// model.js

export function Kurse(){
    this.Kurse = [];
};

export function Kunden(){
    this.Kunden = [];
};

export function Kunden(name, mail, payform, choosenCourse){
    this.name = name;
    this.mail = mail;
    this.payform = payform;
    this.choosenCourse = choosenCourse;
};

