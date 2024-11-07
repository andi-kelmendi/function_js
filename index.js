//exo 1

function addition(a, b) {
    return(a + b)
}
console.log(addition(2, 3));

//exo 2

function salutation(nom) {
    return("Bonjour " + nom)
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

//exo 3

function estPair(nombre) {
    return(nombre % 2 === 0)
  }
  console.log(estPair(4)); // Résultat attendu : true
  console.log(estPair(7)); // Résultat attendu : false

//exo 4

function aireRectangle(longueur, largeur) {
    return(longueur * largeur)
  }
  console.log(aireRectangle(5, 3)); // Résultat attendu : 15

//exo 5

function estMajuscule(chaine) {
    return chaine === chaine.toUpperCase();
  }
  
  console.log(estMajuscule("HELLO")); // Résultat attendu : true
  console.log(estMajuscule("Hello")); // Résultat attendu : false

//exo 6

function maxDeuxNombres(a, b) {
    return Math.max(maxDeuxNombres)(a, b);
  }
  console.log(maxDeuxNombres(10, 5));

//exo 7

function difference(a, b) {
    return(a - b)
  }
  console.log(difference(10, 3));

//exo 8

function convertirEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

//exo 9

function estMajeur(age) {
  return(age >= 18)
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false

//exo 10

function maxTroisNombres(a, b, c) {
  return Math.max(a, b, c);
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

//exo 11

function calculer(a, b, operation) {
  return operation(a, b);
}
function addition(x, y) {
  return x + y;
}
function multiplication(x, y) {
  return x * y;
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15

//exo 12

function filtrerTexte(chaine, filtre) {
  // Écrire le code ici
}
function estVoyelle(c) {
}
console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oo"






// >= supérieur ou égale 
// <= inférieur ou égale 