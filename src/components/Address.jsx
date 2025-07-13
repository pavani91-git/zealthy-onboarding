export default function Address({ value, onChange }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>Street:</label><br />
            <input
                type="text"
                value={value.street}
                onChange={(e) => onChange({ ...value, street: e.target.value })}
            /><br />

            <label>City:</label><br />
            <input
                type="text"
                value={value.city}
                onChange={(e) => onChange({ ...value, city: e.target.value })}
            /><br />

            <label>State:</label><br />
            <input
                type="text"
                value={value.state}
                onChange={(e) => onChange({ ...value, state: e.target.value })}
            /><br />

            <label>Zip:</label><br />
            <input
                type="text"
                value={value.zip}
                onChange={(e) => onChange({ ...value, zip: e.target.value })}
            />
        </div>
    );
}
