import React, { useState, useEffect, useRef } from 'react'

const TodoListContent = () => {

    // states
    const [items, setItems] = useState(() => [{
        name: 'lucas escaiuolquer',
        height: '123',
    }])

    const [insertedName, setInsertedName] = useState(() => '');
    const [insertedHeight, setInsertedHeight] = useState(() => '');

    // ref 
    const inputNameRef = useRef();
    const inputHeightRef = useRef();

    // useEffect 
    useEffect(() => {

        const fetchData = async () => {

            const API_URL = 'https://swapi.dev/api/people';

            const res = await fetch(API_URL);

            const person = await res.json();

            setItems(person.results);

        }

        fetchData();

    }, [])

    // functions
    const handleInputName = (e) => {
        setInsertedName(e.target.value);
    }

    const handleInputHeight = (e) => {
        setInsertedHeight(e.target.value);
    }

    const cleanForm = () => {
        setInsertedName('');
        setInsertedHeight('');

        inputNameRef.current.focus();
    }

    const addItem = (newName, newHeight) => {
        const newItem = {
            id: Math.floor(Math.random() * 10000),
            name: newName,
            height: newHeight,
        }
        setItems([...items, newItem]);

        cleanForm();
    }

    return (
        <section
            style={{
                padding: '50px',
                margin: 'auto 0px',
                backgroundColor: '#333',
                minHeight: '100vh',
                color: 'white',
                fontWeight: 'bolder',
                fontSize: '28px',
                textAlign: 'center'
            }}
        >
            {
                items.map((item, index) => <div key={index}>{item.name} - {item.height}</div>)
            }
            <input
                ref={inputNameRef}
                placeholder='Novo Nome'
                style={{ padding: '10px 15px' }}
                type='text'
                value={insertedName}
                onChange={(e) => handleInputName(e)}
            />
            <input
                ref={inputHeightRef}
                placeholder='Nova Altura'
                style={{ padding: '10px 15px' }}
                type='number'
                value={insertedHeight}
                onChange={(e) => handleInputHeight(e)}
            />
            <button
                style={{
                    padding: '10px 15px',
                    color: 'lime',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onClick={() => addItem(insertedName, insertedHeight)}
            >
                Enviar
            </button>
        </section>
    )
}

export default TodoListContent