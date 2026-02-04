import React, { useState } from 'react';
import { menuItems } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuList() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
                {menuItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        onClick={() => setSelectedItem(item)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 'clamp(1rem, 3vw, 2rem)',
                            background: 'rgba(255,255,255,0.03)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                            gap: 'clamp(1rem, 3vw, 2rem)'
                        }}
                        className="menu-item"
                    >
                        {/* カテゴリー */}
                        <div style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                            color: '#d4a373',
                            borderLeft: '1px solid #d4a373',
                            paddingLeft: 'clamp(0.5rem, 2vw, 1rem)',
                            letterSpacing: '0.3em',
                            fontFamily: "'Noto Serif JP', serif",
                            flexShrink: 0
                        }}>
                            {item.category}
                        </div>

                        {/* 名前 */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <h3 style={{
                                margin: '0 0 0.5rem 0',
                                fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                                fontWeight: 'normal',
                                fontFamily: "'Noto Serif JP', serif"
                            }}>
                                {item.name}
                            </h3>
                            <p style={{
                                margin: 0,
                                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                                color: '#aaa',
                                fontWeight: 300
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* モーダル */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 100,
                            padding: '1rem',
                            boxSizing: 'border-box',
                            overflowY: 'auto'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: '#222',
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                border: '1px solid #444',
                                maxWidth: '500px',
                                width: '100%',
                                position: 'relative',
                                maxHeight: '90vh',
                                overflowY: 'auto'
                            }}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}
                            >
                                ×
                            </button>

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <span style={{ color: '#d4a373', fontSize: '0.9rem', letterSpacing: '0.2em' }}>
                                    {selectedItem.category}
                                </span>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', margin: '1rem 0' }}>{selectedItem.name}</h2>
                                <p style={{ color: '#ccc', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>{selectedItem.description}</p>
                            </div>

                            {/* レシピ画像 */}
                            {selectedItem.recipeImage && (
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <img
                                        src={selectedItem.recipeImage}
                                        alt={selectedItem.name}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '4px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                        }}
                                    />
                                </div>
                            )}

                            <div style={{ borderTop: '1px solid #444', paddingTop: '1.5rem', textAlign: 'center' }}>
                                <p style={{ marginBottom: '1rem', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>作り方・詳細 (Reference)</p>
                                <a
                                    href={selectedItem.recipeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.8rem 1.5rem',
                                        border: '1px solid #d4a373',
                                        color: '#d4a373',
                                        transition: 'all 0.3s ease',
                                        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                                        letterSpacing: '0.1em'
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
                                    {selectedItem.recipeSource} で見る
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
