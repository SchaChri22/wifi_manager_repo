// frontend
// model.js

export function Kurse(){
    this.kursListe = [];
};

export function Kunden(){
    this.kunden = [];
};

export function Kunde(name, mail, payform, choosenCourse){
    this.name = name;
    this.mail = mail;
    this.payform = payform;
    this.choosenCourse = choosenCourse;
};

Kurse.prototype.loadAllCourses = async function(){
    try {
        const response = await fetch("http://localhost:3000/kurse");

        if (!response.ok){
            throw new Error("HTTP-Fehler: " + response.status);
        };

        const daten = await response.json();
        console.log("Daten erhalten: ", daten);
        this.kursListe = daten;
    }
    catch (error){
            console.log("Fehler: ", error.message);
    }
};

