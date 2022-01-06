import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSquare from '../with-square';
import CollectionsOverview from '.';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSquare
)(CollectionsOverview);

export default CollectionsOverviewContainer;
