import Navbar from './components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';

const Root = () => {
    const location = useLocation()
    console.log(location);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;