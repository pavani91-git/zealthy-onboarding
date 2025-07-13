import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';



// Step2 and Step3 we'll add next

export default function Onboarding() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        aboutMe: '',
        birthdate: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        }
    });

    const next = () => setStep((s) => s + 1);
    const prev = () => setStep((s) => s - 1);

    return (
        <div style={{ padding: '20px' }}>
            <h1>🧭 Onboarding Wizard</h1>
            <p>Step {step} of 3</p>

            {step === 1 && (
                <Step1 formData={formData} setFormData={setFormData} next={next} />
            )}
            {step === 2 && (
                <Step2 formData={formData} setFormData={setFormData} next={next} prev={prev} />
            )}
            {step === 3 && (

                <Step3
                formData={formData}
            setFormData={setFormData}
            prev={prev}
            goToStep1={() => setStep(1)} // 👈 Pass this
        />

    )}

        </div>
    );
}
