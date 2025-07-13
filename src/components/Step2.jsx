import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Birthdate from './Birthdate';
import Address from './Address';
import axios from 'axios';
import '../formpage.css'; // ✅ Make sure this path is correct

export default function Step2({ formData, setFormData, next, prev }) {
    const [config, setConfig] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/config');
                const step2Fields = res.data.filter(item => item.page === 2);
                setConfig(step2Fields);
            } catch (err) {
                console.error('Error loading config:', err);
            }
        })();
    }, []);

    return (
        <div className="form-container">
            <h2 className="form-title">Step 2: Profile Info</h2>
            <form onSubmit={(e) => { e.preventDefault(); next(); }}>
                {config.find(c => c.field === 'aboutMe') && (
                    <div className="form-group">
                        <AboutMe
                            value={formData.aboutMe}
                            onChange={(val) => setFormData({ ...formData, aboutMe: val })}
                        />
                    </div>
                )}

                {config.find(c => c.field === 'birthdate') && (
                    <div className="form-group">
                        <Birthdate
                            value={formData.birthdate}
                            onChange={(val) => setFormData({ ...formData, birthdate: val })}
                        />
                    </div>
                )}

                {config.find(c => c.field === 'address') && (
                    <div className="form-group">
                        <Address
                            value={formData.address}
                            onChange={(val) => setFormData({ ...formData, address: val })}
                        />
                    </div>
                )}

                <div className="button-row">

                    <button type="button" className="back-button" onClick={prev}>⬅ Back</button>
                    <button type="submit" className="next-button">Next ➡️</button>

                </div>
            </form>
        </div>
    );
}
