import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';


const Input = ({
    register,
    errors,
    inputLabel,
    styleLabel,
    styleInput,
    anyError,
    inputType,
    placeholder,
    registerTitle,
    styleError,
    contentError
}) => {

    return (
        <label className={styleLabel}>
            {inputLabel}
            <input
                type={inputType}
                className={styleInput}
                defaultValue=''
                pĺaceholder={placeholder}
                {...register(registerTitle, { required: true })}
            />
            {
                anyError &&
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