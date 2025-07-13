export default function AboutMe({ value, onChange }) {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>About Me:</label><br />
            <textarea
                rows="4"
                cols="50"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
