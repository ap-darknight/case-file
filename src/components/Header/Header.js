import React from 'react';
import logo from '../../assets/img/logo_work_1.png';
import back_1 from '../../assets/img/back_1.jpg';
import Typical from 'react-typical';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className="container-fluid m-0 mb-1 min-vh-100 d-flex align-items-center justify-content-center min-vw-100"
            style={{backgroundImage: `url(${back_1})`,
                    backgroundColor: "#cccccc", 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                    }}     
        >   
            <motion.div
                animate={{scale: [0, 1.2, 1]}}
                transition={{delay: 0.4}} 
                className="container d-flex flex-column justify-content-center">
                <motion.img
                    // transition={{duration:1.5, ease: "easeIn"}}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className="m-auto"
                    alt="..."
                    src={logo}
                    style={{height: "170px", width: "170px"}}
                />
            
                <div className="container d-flex flex-column">
                    <h1 
                        className="m-auto text-center"
                        style={{fontFamily: "bangers, cursive", fontSize: "4em"}}>
                        Human Being with Dreams n' Goals
                    </h1>
                    <h3
                        className="m-auto d-flex flex-row"
                        style={{fontFamily: "bangers, cursive", fontSize: "2em"}} 
                    >
                        I'm a{" "}
                        <Typical 
                            className="px-1"
                            steps = {
                            ['Competitive Coder👨‍💻', 800,
                                'Web Developer🍕', 800,
                                'Designer🎃', 800
                            ]
                            } 
                            loop={Infinity}
                            wrapper="p"
                        />    
                    </h3>
                </div>    
            </motion.div>
        </div>
    );
}

export default Header;
