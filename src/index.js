//@ts-check
//////////////////////////////////////////////////////////////
//LESSON 1: JSDOCS BASICS

/*
 By default type errors won't be thrown unless
 We add this to our settings.json in vscode
 "js/ts.implicitProjectConfig.checkJs": true
 The above comment at line 1 will essentially do 
 the same as the statement added to the
 global settings.json 
*/

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John'; // const studentName = 1 throws error;

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89]; //type error if not all numbers

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: 'hello',
  // test: 1 //would throw error
};

//////////////////////////////////////////////////////////////
//LESSON 3 FUNCTIONS AND PARAMS

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};
// console.log(calculateTax(100, 0.1));

//////////////////////////////////////////////////////////////
//LESSON 4 CUSTOM TYPES (typedef)

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student isActive
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20, //this can be omitted since [age] indicates optional
  isActive: true,
};
