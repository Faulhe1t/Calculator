import React, { FunctionComponent, useEffect } from 'react'
import Button from "./Button";
import { Digit, Operator } from "../models/types";
import "../Style.css"

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void
  onAllClearButtonClick: () => void
  onOperatorButtonClick: (operator: Operator) => void
  onEqualButtonClick: () => void
  onPointButtonClick: () => void
  onClearEntryButtonClick: () => void
}

export const Pad: FunctionComponent<PadProps> = ({
                                                   onDigitButtonClick,
                                                   onPointButtonClick,
                                                   onOperatorButtonClick,
                                                   onEqualButtonClick,
                                                   onAllClearButtonClick,
                                                   onClearEntryButtonClick,
                                                 }) => {
  const handleKeyDown = ({keyCode, shiftKey}: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit)
    } else if ((keyCode >= 96 && keyCode <= 105)) {
      onDigitButtonClick((keyCode - 96) as Digit)
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick('*')
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick('/')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    } else if (keyCode === 8) {
      onClearEntryButtonClick()
    } else if (keyCode === 110) {
      onPointButtonClick()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return <div className='buttonsArea'>

    <Button onClick={ onAllClearButtonClick }>
      <span className='baseButton__operation'>AC</span>
    </Button>
    <Button onClick={ onClearEntryButtonClick }>
      <span className='baseButton__operation'>C</span>
    </Button>
    <Button onClick={ () => onOperatorButtonClick('/') }>
      <span className='baseButton__operation'>/</span>
    </Button>


    <Button onClick={ () => onDigitButtonClick(7) }>
      <span className='baseButton__digit'>7</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(8) }>
      <span className='baseButton__digit'>8</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(9) }>
      <span className='baseButton__digit'>9</span>
    </Button>
    <Button onClick={ () => onOperatorButtonClick('*') }>
      <span className='baseButton__operation'>×</span>
    </Button>


    <Button onClick={ () => onDigitButtonClick(4) }>
      <span className='baseButton__digit'>4</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(5) }>
      <span className='baseButton__digit'>5</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(6) }>
      <span className='baseButton__digit'>6</span>
    </Button>
    <Button onClick={ () => onOperatorButtonClick('-') }>
      <span className='baseButton__operation'>-</span>
    </Button>

    <Button onClick={ () => onDigitButtonClick(1) }>
      <span className='baseButton__digit'>1</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(2) }>
      <span className='baseButton__digit'>2</span>
    </Button>
    <Button onClick={ () => onDigitButtonClick(3) }>
      <span className='baseButton__digit'>3</span>
    </Button>
    <Button onClick={ () => onOperatorButtonClick('+') }>
      <span className='baseButton__operation'>+</span>
    </Button>

    <Button onClick={ () => onDigitButtonClick(0) }>
      <span className='baseButton__digit'>0</span>
    </Button>
    <Button onClick={ onPointButtonClick }>
      <span className='baseButton__digit'>.</span>
    </Button>
    <Button onClick={ onEqualButtonClick }>
      <span className='baseButton__specialButton'>=</span>
    </Button>
  </div>
}

export default Pad