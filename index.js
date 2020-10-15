"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'minung';
const age = 28;
const gender = 'male';
const sayHi = (name, age, gender = 'a') => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map