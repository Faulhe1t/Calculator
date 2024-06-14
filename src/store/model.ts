import { createEvent, createStore, sample } from "effector";
import { Digit, Operator } from "../models/types";

export const $userInput = createStore('0');

export const onAllClearButtonClick = createEvent();
export const onClearEntryButtonClick = createEvent();
export const onDigitButtonClick = createEvent<Digit>();
export const onOperatorButtonClick = createEvent<Operator>();
export const onEqualButtonClick = createEvent();
export const onPointButtonClick = createEvent();

sample({
  clock: onAllClearButtonClick,
  fn: () => '0',
  target: $userInput
})

sample({
    clock: onClearEntryButtonClick,
    source: $userInput,
    fn: (userInput) => {
      if (userInput.length > 1)
        return userInput.substring(0, userInput.length - 1)
      else
        return "0"
    },
    target: $userInput
  }
)

sample({
  clock: onDigitButtonClick,
  source: $userInput,
  fn: (userInput, digit: Digit) => {
    if (userInput !== '0') {
      return userInput + digit.toString()
    } else {
      return digit.toString()
    }
  },
  target: $userInput
})

sample({
  clock: onOperatorButtonClick,
  source: $userInput,
  fn: (userInput, operator: Operator) => {
    const v1 = userInput[userInput.length - 1]
    if (v1 === '+' || v1 === '-' || v1 === '*' || v1 === '/' || v1 === '.') {
      return userInput.substring(0, userInput.length - 1)
    } else return userInput + operator
  },
  target: $userInput
})

sample({
  clock: onEqualButtonClick,
  source: $userInput,
  fn: (userInput) => {
    const v1 = userInput[userInput.length - 1]
    if (v1 === '+' || v1 === '-' || v1 === '*' || v1 === '/' || userInput === '0') {
      return
    } else {
      return eval(userInput)
    }
  },
  target: $userInput
})

sample({
  clock: onPointButtonClick,
  source: $userInput,
  fn: (userInput) => {
    let currStr = userInput.split(/[+*/-]/)
    let currDigit = currStr[currStr.length - 1]
    if (currDigit.indexOf('.') === -1)
      return userInput + '.'
    else return userInput + ''
  },
  target: $userInput
})