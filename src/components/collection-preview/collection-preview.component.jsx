
import './collection-preview.styles.scss';
import { useNavigate } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { motion } from 'framer-motion/dist/framer-motion';


export default function CollectionPreview({ title, items }) {
    const navigate = useNavigate();
    return (
        <div className='collection-preview'>
            <motion.h1
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.2,
                    type: 'spring',
                    damping: 15,
                    stiffness: 250
                }}
                exit={{ opacity: 0, x: -150 }}
                className='title' onClick={() => navigate(`../${title.toLowerCase()}`)}>{title.toUpperCase()}</motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, }}
                exit={{ opacity: 0, x: -150 }}
                className='preview'>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, }}
                exit={{ opacity: 0, x: -150 }}
                className='preview-btn-container'
            >
                <CustomButton onClick={() => navigate(`../${title.toLowerCase()}`)} className='preview-btn'>SEE MORE IN {title.toUpperCase()}</CustomButton>
            </motion.div>
        </div>
    )
}

