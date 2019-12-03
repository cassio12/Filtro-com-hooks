import React, {useState} from 'react';
import Highlight from './highlight';
import { lower } from './utils';

const App = () => {
    const [word, setWord] = useState('');
    const [corseName, setCorseNome] = useState('')
    const [corseHours, setCorseHours] = useState('');

    function handleChange(func) {
        return (e) => {
            func(e.target.value);
        }
    }
    return (
        <>
            <input 
            type='text' 
            value={word} 
            onChange={handleChange(setWord)} ></input>
            <p>
                <Highlight 
                children='Texto um é maior que texto dois.' 
                toHighlight={word}/>
            </p>
            <p>
                <Highlight 
                children='Texto dois.' 
                toHighlight={word}/>
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Cursos</th>
                        <th>Horas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input 
                            type='text' 
                            value={corseName} 
                            onChange={handleChange(setCorseNome)}></input>
                        </td>
                        <td>
                            <input 
                            type='text' 
                            value={corseHours} 
                            onChange={handleChange(setCorseHours)}></input>
                        </td>
                    </tr>
                    {courses
                    .filter((course) => (
                        lower(course.name).includes(lower(corseName))
                    ))
                    .map((course) => (
                        <tr key={course.name}>
                            <td>
                                <Highlight 
                                children={course.name} 
                                toHighlight={corseName}
                                />
                            </td>
                            <td>
                                <Highlight 
                                children={course.hours} 
                                toHighlight={corseHours}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

const courses = [
    {
        name: 'JavaScript Ninja',
        hours: '40H'
    },
    {
        name: 'React.js Ninja',
        hours: '60H'
    }
]

export default App;