import { Routes, Route, Link } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Admin from './pages/Admin';
import DataTable from './pages/DataTable';

function App() {
    return (
        <div className="page-wrapper">
            <header className="header">
                <div className="logo">Zealthy</div>
                <div className="nav-links">
                    <Link to="/">Onboarding</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/data">Data Table</Link>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/data" element={<DataTable />} />
            </Routes>
        </div>
    );
}


export default App;
