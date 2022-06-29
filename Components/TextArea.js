import React from 'react'

const TextArea = ({ 
    register,
    registerTitle,
    styleLabel,
    labelTitle,
    styleTextArea,
    textRows,
    placeholder,
 }) => {
    return (
        <label className={styleLabel}>
            {labelTitle}
            <textarea
                className={styleTextArea}
                rows={textRows}
                placeholder={placeholder}
                {...register(registerTitle)}
            >
            </textarea>
        </label>
    )
}

export default TextArea