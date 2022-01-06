
import { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

import { Routes, Route } from "react-router-dom";

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';



const ShopPage = ({ fetchCollectionsStartAsync }) => {

    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync])

    return (
        <div className="shop-page" >
            <Routes>
                <Route path='/' element={<CollectionsOverviewContainer />} />
                <Route path=':collectionId' element={<CollectionPageContainer />} />
            </Routes>
        </div>
    )

};


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);