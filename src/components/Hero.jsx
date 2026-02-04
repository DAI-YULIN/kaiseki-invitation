import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            boxSizing: 'border-box',
            position: 'relative'
        }}>

            {/* テキストコンテナ - 縦書き */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="tategaki"
                style={{
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    fontWeight: 'bold',
                    height: '60%',
                    marginLeft: 'clamp(1rem, 4vw, 4rem)',
                    color: '#f0e6d2',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)',
                    zIndex: 2
                }}
            >
                <h1>春の懐石</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="tategaki"
                style={{
                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                    height: '40%',
                    marginLeft: 'clamp(1rem, 2vw, 2rem)',
                    marginTop: 'clamp(5rem, 15vw, 10rem)',
                    color: '#d4a373'
                }}
            >
                <p>ご招待　鈺薇 様</p>
            </motion.div>

            {/* ヒーロー画像 */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(90%, 600px)',
                    height: 'min(70%, 500px)',
                    zIndex: 0,
                    backgroundImage: 'url(/assets/hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    filter: 'brightness(0.7)',
                    borderRadius: '4px'
                }}
            />

            {/* スクロールインジケーター */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.2em',
                    writingMode: 'horizontal-tb'
                }}
            >
                SCROLL
            </motion.div>
        </section>
    );
}
