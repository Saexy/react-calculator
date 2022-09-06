import React, { useState } from 'react';

import './style.css'

const Calculator = () => {

    const [num1, setNum1] = useState('0')
    const [num2, setNum2] = useState('')
    const [operator, setOperator] = useState('')

    const addNum = (num) => {
        if(num1 == '0'){
            if(num == ','){
                setNum1('0,')
            }else{
                setNum1(num)
            }
        }else{
            if(num == ','){
                if(!num1.includes(",")){
                    setNum1(num1 + num)
                }
            }else{
                setNum1(num1 + num)
            }
        }
    }

    const addOperator = (op) => {
        if(num1 != '0'){
            if(operator == ''){
                setNum2(num1)
                setOperator(op)
                setNum1('0')
            }else{
                let calc
                let cNum1 = num1.includes(',') ? parseFloat(num1.replace(',', '.')) : parseInt(num1.replace(',', '.'))
                let cNum2 = num2.includes(',') ? parseFloat(num2.replace(',', '.')) : parseInt(num2.replace(',', '.'))
                if(operator == '÷'){
                    calc = cNum2 / cNum1
                }else if(operator == 'x'){
                    calc = cNum2 * cNum1
                }else if(operator == '-'){
                    calc = cNum2 - cNum1
                }else if(operator == '+'){
                    calc = cNum2 + cNum1
                }
                setNum1('0')
                setNum2(calc.toString().replace('.', ','))
                setOperator(op)
            }
        }
    }

    const equals = () => {
        if(num1 != '' && num2 != ''){
            let calc
            let cNum1 = num1.includes(',') ? parseFloat(num1.replace(',', '.')) : parseInt(num1.replace(',', '.'))
            let cNum2 = num2.includes(',') ? parseFloat(num2.replace(',', '.')) : parseInt(num2.replace(',', '.'))
            if(operator == '÷'){
                calc = cNum2 / cNum1
            }else if(operator == 'x'){
                calc = cNum2 * cNum1
            }else if(operator == '-'){
                calc = cNum2 - cNum1
            }else if(operator == '+'){
                calc = cNum2 + cNum1
            }
            setNum1(calc.toString().replace('.', ','))
            setNum2('')
            setOperator('')
        }
    }

    const erase = () => {
        const newNumberArr = num1.split('')
        newNumberArr.pop()
        if(newNumberArr.length == 0){
            setNum1('0')
        }else{
            let newNumber = ''
            newNumberArr.forEach((number, n) => {
                newNumber = newNumber + number
            })
            setNum1(newNumber)
        }
    }

    const resetAll = () => {
        setNum1('0')
        setNum2('')
        setOperator('')
    }

    const reset = () => {
        setNum1('0')
    }

    return (
        <div className="calculator">
            <div className="preview">
                <div className="top">{num2} {operator}</div>
                <div className="body">{num1}</div>
            </div>
            <div className="data">
                <div className="row">
                    <button className='button-calc operator' onClick={e => erase()}>E</button>
                    <button className='button-calc operator' onClick={e => reset()}>CE</button>
                    <button className='button-calc operator' onClick={e => resetAll()}>C</button>
                    <button className='button-calc operator' onClick={e => addOperator('÷')}>÷</button>
                </div>
                <div className="row">
                    <button className='button-calc' value='7' onClick={e => addNum(e.target.value)}>7</button>
                    <button className='button-calc' value='8' onClick={e => addNum(e.target.value)}>8</button>
                    <button className='button-calc' value='9' onClick={e => addNum(e.target.value)}>9</button>
                    <button className='button-calc operator' onClick={e => addOperator('x')}>x</button>
                </div>
                <div className="row">
                    <button className='button-calc' value='4' onClick={e => addNum(e.target.value)}>4</button>
                    <button className='button-calc' value='5' onClick={e => addNum(e.target.value)}>5</button>
                    <button className='button-calc' value='6' onClick={e => addNum(e.target.value)}>6</button>
                    <button className='button-calc operator' onClick={e => addOperator('-')}>-</button>
                </div>
                <div className="row">
                    <button className='button-calc' value='1' onClick={e => addNum(e.target.value)}>1</button>
                    <button className='button-calc' value='2' onClick={e => addNum(e.target.value)}>2</button>
                    <button className='button-calc' value='3' onClick={e => addNum(e.target.value)}>3</button>
                    <button className='button-calc operator' onClick={e => addOperator('+')}>+</button>
                </div>
                <div className="row">
                    <button className='button-calc' value='0' onClick={e => addNum(e.target.value)}>0</button>
                    <button className='button-calc invis'></button>
                    <button className='button-calc' value=',' onClick={e => addNum(e.target.value)}>,</button>
                    <button className='button-calc operator' onClick={e => equals()}>=</button>
                </div>
            </div>
        </div>
    )
}
 
export default Calculator;