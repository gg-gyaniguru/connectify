'use client'

import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const SplashScreen = () => {

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const active = setTimeout(() => setToggle(false), 900);
        return () => {
            clearTimeout(active);
        }
    }, []);

    return (
            <AnimatePresence>
                {
                    toggle &&
                    <motion.div
                        className={'w-dvw h-dvh fixed left-0 right-0 z-[99999999999] bg-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'}
                        transition={{duration: .15, ease: 'easeInOut'}}
                        initial={{top: 0}}
                        animate={{top: 0}}
                        exit={{top: '-100dvh'}}
                    >
                        <div className={'w-full h-full flex items-center justify-center'}>
                            connectify
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
    );
};

export default SplashScreen;