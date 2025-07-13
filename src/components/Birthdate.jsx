export default function Birthdate({ value, onChange }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>Birthdate:</label><br />
            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
