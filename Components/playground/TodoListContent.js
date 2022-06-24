import React, { useState, useRef } from 'react';
import TodoListItem from './TodoListItem';
import Swal from 'sweetalert2';

const TodoListContent = () => {

    // states
    const [items, setItems] = useState(() => [])

    const [insertedName, setInsertedName] = useState(() => '');
    const [insertedHeight, setInsertedHeight] = useState(() => '');

    // ref 
    const inputNameRef = useRef();
    const inputHeightRef = useRef();

    // functions
    const handleInputName = (e) => {
        setInsertedName(e.target.value);
    }

    const handleInputHeight = (e) => {
        setInsertedHeight(e.target.value);
    }

    const clearForm = () => {
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

        clearForm();
    }

    const removeItem = (idItemToBeRemoved) => {
        const newList = items.filter(item => item.id !== idItemToBeRemoved);
        setItems(newList);
    }

    const editItem = (idItemToBeEdited) => {
        // todo
        Swal.fire({
            title: 'Edit Name',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirm change',
            showLoaderOnConfirm: true,
            preConfirm: (newName) => {
                const editedItems = items.map(item => item);
                editedItems.forEach(item => {
                    if (item.id === idItemToBeEdited) {
                        item.name = newName
                    }
                })

                setItems((editedItemsInsideState) => editedItemsInsideState = editedItems);
            }
        })
    }

    const showDetails = (item) => {

        const itemText = `
            Name: ${item.name ? item.name : 'none'} \n 
            Height: ${item.height ? item.height : 'none'} \n
            Birth Year: ${item.birth_year ? item.birth_year : 'none'} \n
            Gender: ${item.gender ? item.gender : 'none'} \n
        `;

        Swal.fire({
            icon: 'success',
            title: itemText,
            showCancelButton: true,
            cancelButtonText: 'Delete',
            showConfirmButton: true,
            confirmButtonText: 'Edit',
        }).then((result) => {
            // confirms edit button
            if (result.isConfirmed) {
                // edit function
                editItem(item.id);
            } else if (
                //confirms cancel button
                result.dismiss === Swal.DismissReason.cancel
            ) {
                // delete function
                removeItem(item.id);
            }
        })
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
            <TodoListItem
                items={items}
                setItems={setItems}
                removeItem={removeItem}
                editItem={editItem}
                showDetails={showDetails}
            />
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