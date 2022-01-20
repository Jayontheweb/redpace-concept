

import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

import { motion } from 'framer-motion/dist/framer-motion';




export default function MenuItem({ title, imageUrl, size, linkUrl }) {


    let navigate = useNavigate();

    return (
        <motion.div
            // initial={{ opacity: 0, x: 50, y: 50 }}
            // animate={{ opacity: 1, x: 0, y: 0 }}
            // transition={{ duration: 0.3 }}
            // exit={{ opacity: 0, x: -150 }}
            className={`${size} menu-item`}
            onClick={() => navigate(`../${linkUrl}`)}
        >
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    SHOP NOW
                </span>
            </div>
        </motion.div>
    )
}
