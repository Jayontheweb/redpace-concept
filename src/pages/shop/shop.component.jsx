
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

import { Routes, Route, useLocation } from "react-router-dom";

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';






const ShopPage = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync());
    }, [dispatch])

    return (
        <div className="shop-page" >
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<CollectionsOverviewContainer />} />
                    <Route path=':collectionId' element={<CollectionPageContainer />} />
                </Routes>
            </AnimatePresence>
        </div>
    )

};




export default ShopPage;