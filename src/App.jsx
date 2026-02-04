import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import SakuraBackground from './components/SakuraBackground';
import Hero from './components/Hero';
import MenuList from './components/MenuList';
import PasswordGate from './components/PasswordGate';
import './App.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // セッションストレージでパスワード状態を保持
  useEffect(() => {
    const unlocked = sessionStorage.getItem('kaiseki_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem('kaiseki_unlocked', 'true');
    setIsUnlocked(true);
  };

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && <PasswordGate onUnlock={handleUnlock} />}
      </AnimatePresence>

      {isUnlocked && (
        <>
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <SakuraBackground />
              </Suspense>
            </Canvas>
          </div>

          <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <Hero />
            <MenuList />
            <footer style={{
              textAlign: 'center',
              padding: '4rem 0',
              opacity: 0.6,
              fontSize: '0.8rem',
              letterSpacing: '0.1em'
            }}>
              <p>© 2026 春の懐石</p>
              <p>Inspired by Traditional Japanese Cuisine</p>
            </footer>
          </div>
        </>
      )}
    </>
  );
}

export default App;
