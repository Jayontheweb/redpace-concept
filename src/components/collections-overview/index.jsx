
import { useSelector } from 'react-redux';
import { selectCollectionsForPrieview } from '../../redux/shop/shop.selectors';


import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

import { Helmet } from 'react-helmet';

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPrieview);

    return (
        <div className='collections-overview'>
            <Helmet>
                <title>Shop | Red Pace.</title>
            </Helmet>
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
