/* 
  Variabler

  variabel = någonting vi lagrar information i

  camelCase   =    JavaScript, Java, c, c++
  Pascal      =    C#, Pascal
  _private    =    en variabel som bara lever innom en viss del.


  ex. firstName, lastName, email, postalCode, city01

  _firstName = 'Joakim'

*/


firstName = 'Joakim';       // global deklarering (Gör inte såhär)
var firstName = 'Joakim';   // global deklarering (Gör inte såhär)


let lastName = 'Wahlström';   // lokal deklarering (gör såhär!)
lastName = 'Andersson';

const pi = 3.14;
// pi = 5;

console.log(firstName);
console.log(lastName);
console.log(pi);

/* 
  Deklarera variabler
  ------------------------------------------------------

  var = global variabel - accessbar överallt i koden
  let = lokal variabel - accessbar inom det angivna området
  const = konstant - kan inte skrivas över (undantag finns)


  C# exempel.
    string name = "Joakim";
    int age = 35;
  JS exempel.
    let name = 'Joakim';
    let age = 35;

*/