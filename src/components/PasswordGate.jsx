import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PasswordGate({ onUnlock }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'HYW') {
            onUnlock();
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2416 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999
            }}
        >
            <motion.div
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '3rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(212, 163, 115, 0.3)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '90%'
                }}
            >
                <div className="tategaki" style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    height: '120px',
                    margin: '0 auto 2rem auto'
                }}>
                    <h2>春の懐石</h2>
                </div>

                <p style={{
                    marginBottom: '2rem',
                    color: '#d4a373',
                    letterSpacing: '0.1em',
                    fontSize: '0.9rem'
                }}>
                    パスワードを入力してください
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="PASSWORD"
                        autoFocus
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'rgba(0,0,0,0.3)',
                            border: error ? '1px solid #ff4444' : '1px solid rgba(212, 163, 115, 0.5)',
                            color: '#f0e6d2',
                            fontSize: '1rem',
                            textAlign: 'center',
                            letterSpacing: '0.3em',
                            outline: 'none',
                            transition: 'border 0.3s ease',
                            marginBottom: '1.5rem',
                            boxSizing: 'border-box'
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'transparent',
                            border: '1px solid #d4a373',
                            color: '#d4a373',
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = '#d4a373';
                            e.target.style.color = '#000';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#d4a373';
                        }}
                    >
                        入場
                    </button>
                </form>

                {error && (
                    <p style={{
                        color: '#ff4444',
                        marginTop: '1rem',
                        fontSize: '0.8rem'
                    }}>
                        パスワードが正しくありません
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
}
