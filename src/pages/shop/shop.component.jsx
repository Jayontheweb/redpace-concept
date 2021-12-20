
import { Outlet } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';

import './shop.styles.scss';


const ShopPage = () => {

    return (
        <div className="shop-page">
            <Outlet />
        </div>
    )
}

export default ShopPage;