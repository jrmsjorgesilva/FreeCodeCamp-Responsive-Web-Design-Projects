import React, { useEffect } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const TodoListItem = ({ items, setItems, removeItem, editItem, showDetails }) => {

    // useEffect 
    useEffect(() => {

        const fetchData = async () => {

            const API_URL = 'https://swapi.dev/api/people';

            const res = await fetch(API_URL);

            const persons = await res.json();

            // insere id nos campos 
            const personsWithId = persons.results.map(elem => {
                const newObj = {
                    ...elem,
                    id: Math.floor(Math.random() * 10000)
                }
                return newObj;
            })

            //  seta novo array 
            setItems(personsWithId);

        }

        fetchData();

    }, []);

    return (
        <>
            {
                items.map(item => (
                    <div key={item.id}>
                        <span 
                            style={{ cursor: 'pointer' }} 
                            onClick={() => showDetails(item)}
                        >
                            {item.name} - {item.height}
                        </span>
                        <FaTrashAlt
                            onClick={() => removeItem(item.id)}
                            role='button'
                            style={{
                                color: 'firebrick',
                                margin: '-4px 20px',
                                fontSize: '22px',
                                cursor: 'pointer',
                            }}
                        />
                        <FaEdit
                            onClick={() => editItem(item.id)}
                            role='button'
                            style={{
                                color: 'lime',
                                margin: '-4px 0px',
                                fontSize: '22px',
                                cursor: 'pointer',
                            }}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default TodoListItem