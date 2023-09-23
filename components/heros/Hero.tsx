'use client'
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            let yOffset = window.scrollY;
            controls.start({ y: yOffset * 0.2 });  // 0.2 determines the "speed" of the parallax effect
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <div className="relative w-full h-[100vh]">
            <div className="z-10 absolute w-full h-full">
                <Image
                    src="/images/home-2/product-0.png"
                    alt="product 0"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='top center'
                />
            </div>

            <motion.div
                animate={controls}
                className="absolute inset-0 flex items-center justify-center font-bold z-0"
                style={{ fontSize: "clamp(16px, 12vw, 10rem)" }}
            >
                Incredible Sound
            </motion.div>
        </div>
    )
}

export default Hero;
