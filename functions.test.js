// const { TestWatcher } = require('jest')
const { expect, test, describe } = require("@jest/globals");

const { returnTwo, greeting, add, multiply, subtract, divide } = require('./functions')

test('Should return 2', () => {
    expect(returnTwo()).toBe(2)
});

test('Should return greeting "Hello, {name}"', () => {
    expect(greeting('James')).toBe('Hello, James')
});

test('Should return greeting "Hello, {name}"', () => {
    expect(greeting('Jill')).toBe('Hello, Jill')
});

describe('calculator calculates', () => {
    test('Should multiply 2 numbers', () => {
        expect(multiply(3, 9)).toBe(27)
    });
    
    test('Should add two numbers', () => {
        expect(add(5, 9)).toBe(14)
    });

    test('Should subtract one number from another', () => {
        expect(subtract(10, 8)).toBe(2)
    });
    test('Should divide one number by another number', () => {
        expect(divide(64, 8)).toBe(8)
    })
});

