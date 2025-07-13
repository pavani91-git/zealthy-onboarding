import { useEffect, useState } from 'react';
import axios from 'axios';

const DataPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://zealthy-backend-6t10.onrender.com/api/data')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>📊 Submitted User Data</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>About Me</th>
                    <th>Birthdate</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u, idx) => (
                    <tr key={idx}>
                        <td>{u.email}</td>
                        <td>{u.about_me || '-'}</td>
                        <td>{u.birthdate ? u.birthdate.split('T')[0] : '-'}</td>
                        <td>{u.street || '-'}</td>
                        <td>{u.city || '-'}</td>
                        <td>{u.state || '-'}</td>
                        <td>{u.zip || '-'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataPage;
