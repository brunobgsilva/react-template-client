import axios from "axios";
import { useState } from "react";

function Calculadora() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operation, setOperation] = useState('');
    const [resultado, setResultado] = useState('');

    const manipularNum1 = (e) => {
        setNum1(e.target.value);
        console.log(`num1: ${e.target.value}`);
    }

    const manipularNum2 = (e) => {
        setNum2(e.target.value);
        console.log(`num2: ${e.target.value}`);
    };

    const manipularOperation = (e) => {
        setOperation(e.target.value);
        console.log(`operation: ${e.target.value}`);
    };

    const calcular = async () => {
        const res = await axios.post('http://localhost:5000/calculadora', {
            num1: Number(num1),
            num2: Number(num2),
            operation
        });
        console.log(res.data);

        setResultado(`Resultado: ${res.data.result}`);
    };

    return(
        <div>
            <input onChange={manipularNum1} placeholder="digite o num 1" type="number"></input>

            <input onChange={manipularNum2} placeholder="digite o num 2" type="number"></input>

            <select onChange={manipularOperation} defaultValue={''}>
                <option value="" disabled hidden>
                    Escolha a operação
                </option>

                <option value="+">
                    +
                </option>

                <option value="-">
                    -
                </option>

                <option value="*">
                    *
                </option>

                <option value="/">
                    /
                </option>
            </select>

            <button onClick={calcular}>
                Calcular
            </button>

            <p>
                {resultado}
            </p>

        </div>
    )
} 

export default Calculadora;