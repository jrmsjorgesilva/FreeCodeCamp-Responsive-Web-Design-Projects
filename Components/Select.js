import React from 'react';

const Select = ({
    register,
    registerTitle,
    optionValues,
    styleLabel,
    labelTitle,
    styleSelect
}) => {
    return (
        <label className={styleLabel}>
            {labelTitle}
            <select
                className={styleSelect}
                {...register(registerTitle)}
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