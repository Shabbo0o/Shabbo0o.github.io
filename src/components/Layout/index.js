

import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Layout = () => {
    return (
        <div className='app-layout'>
            <Sidebar />
            <div className='page-content'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
