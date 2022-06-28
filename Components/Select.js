import React from 'react';

const Select = ({
    select,
    handleSelect,
    optionValues,
    styleLabel,
    labelTitle,
    styleSelect,

}) => {
    return (
        <label className={styleLabel}>
            {labelTitle}
            <select
                className={styleSelect}
                onChange={(e) => handleSelect(e)}
                value={select}
            >
                {optionValues.map(option =>
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.content}
                    </option>
                )}

            </select>
        </label>
    )
}

export default Select