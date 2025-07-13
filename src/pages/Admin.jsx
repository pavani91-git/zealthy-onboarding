import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [config, setConfig] = useState({
        aboutMe: 2,
        birthdate: 2,
        address: 3
    });

    const handleChange = (field, page) => {
        setConfig(prev => ({
            ...prev,
            [field]: parseInt(page)
        }));
    };

    const handleSave = async () => {
        const configArray = Object.entries(config).map(([field, page]) => ({
            field,
            page
        }));

        const page2Fields = configArray.filter(c => c.page === 2);
        const page3Fields = configArray.filter(c => c.page === 3);

        if (page2Fields.length === 0 || page3Fields.length === 0) {
            alert('❌ Each page (2 and 3) must have at least one component.');
            return;
        }

        try {
            const res = await axios.post('https://zealthy-backend-6t10.onrender.com/api/config', configArray);
            if (res.status === 200 || res.status === 201) {
                alert('✅ Config saved!');
            }
        } catch (error) {
            console.error(error);
            alert('❌ Failed to save config.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>⚙️ Admin Page: Customize Onboarding</h2>

            {['aboutMe', 'birthdate', 'address'].map((field) => (
                <div key={field} style={{ marginBottom: '10px' }}>
                    <label><strong>{field}</strong> should appear on page: </label>
                    <select
                        value={config[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                    >
                        <option value={2}>Step 2</option>
                        <option value={3}>Step 3</option>
                    </select>
                </div>
            ))}

            <button onClick={handleSave}>💾 Save Config</button>
        </div>
    );
};

export default Admin;
