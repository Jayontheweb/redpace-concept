import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSquare from "../../components/with-square";
import CollectionPage from ".";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSquare
)(CollectionPage);


export default CollectionPageContainer;

