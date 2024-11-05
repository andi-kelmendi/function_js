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
  console.log(maxDeuxNombres(10, 5)); // Résultat attendu : 10

//exo 7

function difference(a, b) {
    return(a - b)
  }
  console.log(difference(10, 3)); // Résultat attendu : 7

//exo 8