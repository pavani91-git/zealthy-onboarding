import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Birthdate from './Birthdate';
import Address from './Address';
import axios from 'axios';

import '../formpage.css';

export default function Step3({ formData, setFormData, prev, goToStep1 }) {
    {
        const [config, setConfig] = useState([]);


        useEffect(() => {
            (async () => {
                try {
                    const res =  await axios.get('https://zealthy-backend-6t10.onrender.com/api/config');

                    const step3Fields = res.data.filter(item => item.page === 3);
                    setConfig(step3Fields);
                } catch (err) {
                    console.error('Error loading config:', err);
                }
            })();
        }, []);

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('https://zealthy-backend-6t10.onrender.com/api/users', formData);
                if (response.status === 200 || response.status === 201) {
                    alert('🎉 User submitted successfully!');
                    goToStep1(); // ✅ Redirect to Step1 ("/" path)
                } else {
                    alert('❌ Submission failed.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('❌ Something went wrong.');
            }
        };

        return (
            <div className="form-container">
                <h2 className="form-title">Step 3: Final Info</h2>
                <form onSubmit={handleSubmit}>
                    {config.find(c => c.field === 'aboutMe') && (
                        <div className="form-group">
                            <AboutMe
                                value={formData.aboutMe}
                                onChange={(val) => setFormData({...formData, aboutMe: val})}
                            />
                        </div>
                    )}
                    {config.find(c => c.field === 'birthdate') && (
                        <div className="form-group">
                            <Birthdate
                                value={formData.birthdate}
                                onChange={(val) => setFormData({...formData, birthdate: val})}
                            />
                        </div>
                    )}
                    {config.find(c => c.field === 'address') && (
                        <div className="form-group">
                            <Address
                                value={formData.address}
                                onChange={(val) => setFormData({...formData, address: val})}
                            />
                        </div>
                    )}
                    <div className="button-row">
                        <button type="button" className="form-button back" onClick={prev}>⬅ Back</button>
                        <button type="submit" className="form-button submit">🚀 Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}