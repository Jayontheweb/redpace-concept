
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPrieview } from '../../redux/shop/shop.selectors';


import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPrieview);

    return (
        <div className='collections-overview'>
            <div className='overwiev-items'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        </div>
    )
}


export default CollectionsOverview;
