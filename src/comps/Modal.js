import React from 'react'
import {motion} from 'framer-motion'

function Modal({selectedImg, setSelectedImg}) {
    const handleClick =(e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null) ;
        }
        
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <motion.img src={selectedImg} alt= "enlarged pic" 
            initial={{y:"-100vh"}}
            animate={{y:0}}/>            
        </div>
    )
}

export default Modal
