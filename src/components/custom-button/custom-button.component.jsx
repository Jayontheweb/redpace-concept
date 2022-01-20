
import { CustomButtonContainer } from './custom-button.styles';

import { motion } from 'framer-motion/dist/framer-motion';


export default function CustomButton({ children, ...props }) {
    return (
        <CustomButtonContainer as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{
                scale: 0.8
            }}
            transition={{ duration: 0.1 }}
            {...props}>
            {children}
        </CustomButtonContainer>
    )
}

