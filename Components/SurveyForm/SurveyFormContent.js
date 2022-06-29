import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import Offer from './Offer';

const SurveyFormContent = () => {

    const [formToComplete, setFormToComplete] = useState(() => true);
    const [persona, setPersona] = useState(() => '');

    return (
        <>
            {formToComplete ? (
                <SurveyForm
                    setFormToComplete={setFormToComplete}
                    setPersona={setPersona}
                />
            ) : (
                <Offer
                    setFormToComplete={setFormToComplete}
                    persona={persona}
                />
            )}

        </>
    )
}

export default SurveyFormContent