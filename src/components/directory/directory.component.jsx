
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss'

import { motion } from 'framer-motion/dist/framer-motion';



const Directory = () => {

    const sections = useSelector(selectDirectorySections);

    const navigate = useNavigate();

    return (
        <motion.div
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -250 }}
            className='directory-menu'>
            {
                sections.map(({ id, ...props }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.2, delay: id * 0.1 }}
                        className='menu-item'

                        className={`${props.size} menu-item`}
                        onClick={() => navigate(`../${props.linkUrl}`)}
                    >

                        <div className='background-image' style={{
                            backgroundImage: `url(${props.imageUrl})`
                        }} />
                        <div className='content'>
                            <h1 className='title'>
                                {props.title.toUpperCase()}
                            </h1>
                            <span className='subtitle'>
                                SHOP NOW
                            </span>
                        </div>

                        {/* <MenuItem key={id}
                            {...otherSectionProps}
                        /> */}
                    </motion.div>
                ))
            }
        </motion.div>
    )
}


export default Directory;
