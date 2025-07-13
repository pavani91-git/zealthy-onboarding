import React from 'react';
import '../formpage.css'; // Make sure this path is correct

export default function Step1({ formData, setFormData, next }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Step 1: Account Setup</h2>
            <form onSubmit={(e) => { e.preventDefault(); next(); }}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <button type="submit" className="form-button">Next ➡️</button>
            </form>
        </div>
    );
}
