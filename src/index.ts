const sayHi = (name:String, age:Number, gender?: String): String => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi('minung', 28, 'mail'));

export {};