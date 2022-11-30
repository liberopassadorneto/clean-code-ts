const numberInString = "123468";

// NÃO FAÇA ISSO
const number = +numberInString;
const number = parseInt(numberInString);
const inNumberNotNull = !!number;
const numberAsString = `${number}`;

// FAÇA ISSO
const number = Number(numberInString);
const isNumberNotNull = Boolean(number);
const numberAsString = String(number);
