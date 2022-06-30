import React from 'react'

const ListOfStudents = ({ firebaseValueSelected }) => {
    return (
        <ul
            style={{
                backgroundColor: 'magenta',
                color: 'white',
                fontSize: '26px',
                fontWeight: 'bold',
                padding: '20px',
                margin: '20px 100px',
                textAlign: 'center',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
                opacity: '.4'
            }}
        >
            {
                firebaseValueSelected.map(item => (
                    <li key={item.email}>
                        {item.name}
                    </li>
                )).reverse()
            }
        </ul>
    )
}

export default ListOfStudents