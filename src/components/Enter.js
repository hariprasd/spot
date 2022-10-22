import React from "react";
import '../styles/Enter.css';
import { motion } from "framer-motion";
import Enterimg from '../assets/enter.svg'

const Enter = ({ handleEnter }) => {
    return(
        <motion.div
            onClick={()=> handleEnter()}
            whileHover={{
                scale:1.04,
                cursor: 'pointer'
            }}

            className="enter w-100 h-20 rounded-full border-black p-10 flex items-center justify-center">
            <p className="text-sm text-white">ENTER</p>
            <img className="pl-1 w-6" src={Enterimg}></img>
        </motion.div>
    )
}

export default Enter;