
import React from 'react';


import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { Routes, Route } from "react-router-dom";


import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../../pages/collection';
import WithSquare from '../../components/with-square';

const CollectionsOverviewWithSquare = WithSquare(CollectionsOverview);
const CollectionPageWithSquare = WithSquare(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="shop-page" >
                <Routes>
                    <Route path='/' element={<CollectionsOverviewWithSquare isLoading={loading} />} />
                    <Route path=':collectionId' element={<CollectionPageWithSquare isLoading={loading} />} />
                </Routes>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);