
import CategoryNav from '../../../components/CategoryNav';
import './styles.css';

import { Outlet } from 'react-router-dom';

export default function ProducsPage() {

    return (
        <>
            <CategoryNav />
            <div className='dr-container'>
                <Outlet />
            </div>

        </>
    );
}