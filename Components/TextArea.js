import React from 'react'

const TextArea = ({ 
    styleLabel,
    labelTitle,
    styleTextArea,
    textRows,
    placeholder
 }) => {
    return (
        <label className={styleLabel}>
            {labelTitle}
            <textarea
                className={styleTextArea}
                rows={textRows}
                placeholder={placeholder}
            >
            </textarea>
        </label>
    )
}

export default TextArea