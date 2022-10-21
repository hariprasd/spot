import React from "react";
import '../styles/Enter.css';
import { motion } from "framer-motion";

const Enter = ({ handleEnter }) => {
    return(
        <motion.div
            onClick={()=> handleEnter()}
            whileHover={{
                scale:1.1,
                cursor: 'pointer'
            }}
            className="enter w-16 h-16 rounded-full border-black p-8 flex items-center justify-center">
            <p className="text-xs text-white">Enter</p>
        </motion.div>
    )
}

export default Enter;