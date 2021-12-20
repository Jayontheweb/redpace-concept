
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPrieview } from '../../redux/shop/shop.selectors';


import CollectionPriview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            <div className='overwiev-items'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPriview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPrieview
})

export default connect(mapStateToProps)(CollectionsOverview);
