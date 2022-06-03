import {useState} from "react";
import {PieChart} from "react-minimal-pie-chart";

export const CircleDiagram = () => {
    const [state, setState] = useState([])
    const [inputState, setInputState] = useState('')

    const handleSubmit = () => {
        if (inputState > 0) {
            let arr = [...state]
            arr.push({
                title: '',
                value: Number(inputState),
                color: '#' + Math.floor(Math.random() * 16777215).toString(16)
            })
            setState(arr)
        }
        setInputState('')
    }

    const handleDelete = () => {
        let arr = [...state]
        arr.pop()
        setState(arr)
    }

    const handleChange = e => {
        setInputState(e.target.value)
    };

    return (
        <div className={'Main'}>
            <h1>Круговая диаграмма</h1>
            <PieChart
                data={state}
                radius={40}
                label={({dataEntry}) => dataEntry.value}
                labelStyle={{
                    fontSize: "5px",
                    fontColor: "FFFFFA",
                    fontWeight: "800",
                }}

            />
            <div className='inputs'>
                <input onChange={handleChange} placeholder='123' type='number' value={inputState}/>
                <button onClick={handleSubmit}>Добавить</button>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </div>
    );
}