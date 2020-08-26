//1. creare lista da 1 a 100
for ( var numero = 1; numero <= 100; numero++ ) {

  //2. se il numero e divisibile per 3 allora stampo Fizz
  if (numero % 3 === 0 && numero % 5 === 0)  {
    document.getElementById("lista").innerHTML += "<li>" + "FizzBuzz"; + "</li>";
  }
  // 3.se il numero è divisibile per 5 allora stampo Buzz
  else if (numero % 5 === 0){
    document.getElementById("lista").innerHTML += "<li>" + "Buzz"; + "</li>";
  }
  //4. i numeri divisibili sia per 3  e 5 stampo fizzbuuz
  else if  (numero % 3 === 0)  {
    document.getElementById("lista").innerHTML += "<li>" + "Fizz"; + "</li>";
  }
  else {
    document.getElementById("lista").innerHTML += "<li>" + numero + "</li>";

  }
}
