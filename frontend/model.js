// frontend
// model.js

export function Kurse(){
    this.kursListe = [];
};

export function Kunden(){
    this.kundenListe = [];
};

export function Kunde(name, mail, payform, courseID = []){
    this.name = name;
    this.mail = mail;
    this.payform = payform;
    this.courseID = courseID;
};

Kurse.prototype.getAllCourses = async function(){
    try {
        const response = await fetch("http://localhost:3000/kurse");

        if (!response.ok){
            throw new Error("HTTP-Fehler: " + response.status);
        };

        const daten = await response.json();
        console.log("Daten erhalten: ", daten);
        this.kursListe = daten;

        return this.kursListe;
    }
    catch (error){
            console.log("Fehler: ", error.message);
            return [];
    };
};

Kunden.prototype.getAllCustomers = async function(){
    try {
        const response = await fetch("http://localhost:3000/kunden");

        if (!response.ok){
            throw new Error("HTTP-Fehler: " + response.status);
        };

        const daten = await response.json();
        console.log("Daten erhalten: ", daten);
        this.kundenListe = daten;

        return this.kundenListe;
    }
    catch (error){
            console.log("Fehler: ", error.message);
            return [];
    };
}


Kunden.prototype.addCustomer = function(person){
    if (this.kundenListe.find((kunde) => kunde.id === person.id)) {
        throw new Error("Kunde existiert bereits!");
    }
    else {
        this.kundenListe.push(person);
    }
};

// entferne Kunde von Kurs
Kunden.prototype.removeCustomer = function(person){
    const neueKundenListe = this.kundenListe.filter((kunde) => kunde.id !== person.id);

    if (neueKundenListe.length === this.kundenListe.length){
        throw new Error("Kunde existiert nicht!");
    };

    this.kundenListe = neueKundenListe;
};

// finde alle Kurse von Kunde
Kunden.prototype.getCourseOF = function(person){
    if (this.kundenListe.find((kunde) => kunde.id === person.id)) {
        return this.courseID;
    };
};