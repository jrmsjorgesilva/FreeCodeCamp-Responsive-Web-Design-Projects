import React from 'react'
import styles from '../styles/css/SurveyForm.module.css'
import { FaExclamationCircle } from 'react-icons/fa';


const Input = ({
    input,
    handleInput,
    register,
    errors,
    inputLabel,
    styleLabel,
    styleInput,
    inputType,
    placeholder,
    inputTitle,
    styleError,
    contentError
}) => {
    return (
        <label className={styleLabel}>
            {inputLabel}
            <input
                type={inputType}
                className={styleInput}
                value={input}
                onChange={(e) => handleInput(e)}
                pĺaceholder={placeholder}
                {...register(inputTitle, { required: true })}
            />
            {
                errors.name &&
                <span
                    className={styleError}
                >
                    <FaExclamationCircle
                        style={{
                            color: 'white',
                            margin: '0px 5px'
                        }}
                    />
                    {contentError}
                </span>
            }
        </label>
    )
}

export default Input