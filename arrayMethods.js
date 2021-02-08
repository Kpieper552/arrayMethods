// Gebruik array methoden voor alle onderstaande opdrachten

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
];

// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw
// Verwachte uitkomst:
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]

// [ ] de waarde year uit de lijst moet liggen tussen 1500 en 1600 daarbij
//     moet elke keer door de lijst heen gegaan worden en geconroleerd worden of
//     de year waarde voldoet aan groter dan 1499 en kleiner dan 1600 zijn die
//     uitkomsten true dan dient de inventor geselecteerd te worden

const Inventorsborn16thCentury = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year <= 1600;
});
console.log(Inventorsborn16thCentury);

// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];
//const yearofbirth = inventors.year("");
//for (let index = 0; index ,< 3; index++)
//return inventors.year

const BirthyearInv = inventors.map((inventor) => {
    return inventor.year;
})
console.log(BirthyearInv);

// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

const Inv = inventors.map((inventor) => {
    return inventor.first + " " + inventor.last;
})
console.log(Inv)


// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder
// Verwachte uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]

const InvOldest = inventors.sort((InvA, InvB) => {
    if (InvA.year > InvB.year) {
        return 1;
    }
    if (InvA.year < InvB.year) {
        return -1;
    }
    if (InvA.year === InvB.year) {
        return 0;
    }
});
console.log(InvOldest);

// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven
// Verwachte uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

const Agelived = inventors.map((inventor) => {
    return (inventor.passed - inventor.year);
});
const invagelived = Agelived.sort((A, B) => {
    if (A > B) {
        return 1;
    }
    if (A < B) {
        return -1;
    }
    if (A === B) {
        return 0;
    }
});

console.log(invagelived);
// de personen zijn niet in de lijst genoemd; alleen de jaartallen in het verschil waarin ze geleefd hebben en op volgorde.
//  leeftijd berekend hoeveel jaar de inventors hebben geleefd heeft.check nu les voor oplossing om volgorde lijst te krijgen.

// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Verwachte uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }

const specInventors = inventors.find((inventors) => {
    return inventors.last === "Edison";
});
console.log(specInventors); // zoals boven