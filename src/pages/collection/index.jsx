

import { selectCollection } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';


import CollectionItem from '../../components/collection-item/collection-item.component';
import Footer from '../../components/footer';

import './collection.styles.scss';

import { motion } from 'framer-motion/dist/framer-motion';

import { Helmet } from 'react-helmet';

const CollectionPage = () => {

    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -150 }}
            className='collection-page'>

            <Helmet>
                <title>{title} | Red Pace.</title>
            </Helmet>

            <motion.h2
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.2,
                    type: 'spring',
                    damping: 15,
                    stiffness: 250
                }}
                exit={{ opacity: 0, x: -150 }}
                className='title'>{title}
            </motion.h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
            <Footer />
        </motion.div>
    )
}



export default CollectionPage;
