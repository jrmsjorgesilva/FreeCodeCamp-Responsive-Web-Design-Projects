import React from 'react'

const TextArea = ({ 
    styleLabel,
    labelTitle,
    styleTextArea,
    textRows,
    placeholder,
    onChange,
 }) => {
    return (
        <label className={styleLabel}>
            {labelTitle}
            <textarea
                className={styleTextArea}
                rows={textRows}
                placeholder={placeholder}
                onChange={onChange}
            >
            </textarea>
        </label>
    )
}

export default TextArea