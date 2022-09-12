import React, { useState } from 'react'
import './style.css'

function Clac() {
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setResult(result.concat(e.target.name));
    }
    const handleClear = () => {
        setResult('');
    }
    const handleDel = () => {
        setResult(result.slice(0, -1))
    }
    const handleCalculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch (err) {
            setResult('Error')
        }
    }
    return (
        <div className='Container' >

            <form>
                <input type='text' value={result} placeholder='0' />
            </form>

            <div className='Buttons'>
                <button onClick={handleClear} id='clear' className='highlight' >Clear</button>
                <button onClick={handleDel} id='del' className='highlight' >C</button>
                <button onClick={handleChange} name='/' className='highlight' >/</button>

                <button onClick={handleChange} name='7' >7</button>
                <button onClick={handleChange} name='8' >8</button>
                <button onClick={handleChange} name='9' >9</button>
                <button onClick={handleChange} name='&times;' className='highlight' >&times;</button>

                <button onClick={handleChange} name='4' >4</button>
                <button onClick={handleChange} name='5' >5</button>
                <button onClick={handleChange} name='6' >6</button>
                <button onClick={handleChange} name='-' className='highlight' >-</button>

                <button onClick={handleChange} name='1' >1</button>
                <button onClick={handleChange} name='2' >2</button>
                <button onClick={handleChange} name='3' >3</button>
                <button onClick={handleChange} name='+' className='highlight'>+</button>

                <button onClick={handleChange} name='0' >0</button>
                <button onClick={handleChange} name='.' >.</button>
                <button onClick={handleCalculate} id='equal' className='highlight' >=</button>
            </div>
        </div>
    )
}

export default Clac