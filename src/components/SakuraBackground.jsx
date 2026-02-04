import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const PETAL_COUNT = 150;

export default function SakuraBackground() {
    const texture = useTexture('./assets/petal.png');
    const mesh = useRef();

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initialize particles with simpler logic
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < PETAL_COUNT; i++) {
            const x = (Math.random() - 0.5) * 20; // -10 to 10
            const y = (Math.random() - 0.5) * 20; // -10 to 10
            const z = (Math.random() - 0.5) * 10; // -5 to 5
            const speed = 0.02 + Math.random() * 0.03;
            const xSway = Math.random() * 0.02;
            const zSway = Math.random() * 0.02;

            temp.push({
                x, y, z,
                speed,
                time: Math.random() * 100,
                xSway, zSway,
                rotation: {
                    x: Math.random() * Math.PI,
                    y: Math.random() * Math.PI,
                    z: Math.random() * Math.PI,
                    speedX: Math.random() * 0.05,
                    speedY: Math.random() * 0.05,
                    speedZ: Math.random() * 0.05
                }
            });
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        particles.forEach((p, i) => {
            // Fall down
            p.y -= p.speed;
            p.time += delta;

            // Reset if out of view
            if (p.y < -10) {
                p.y = 10;
                p.x = (Math.random() - 0.5) * 20;
                p.z = (Math.random() - 0.5) * 10;
            }

            // Sway
            const swayX = Math.sin(p.time * 2 + p.x) * 0.5;
            const swayZ = Math.cos(p.time * 1.5 + p.z) * 0.5;

            // Rotate
            p.rotation.x += p.rotation.speedX;
            p.rotation.y += p.rotation.speedY;
            p.rotation.z += p.rotation.speedZ;

            dummy.position.set(p.x + swayX, p.y, p.z + swayZ);
            dummy.rotation.set(p.rotation.x, p.rotation.y, p.rotation.z);

            // Scale
            const s = 0.2 + Math.sin(p.time) * 0.05;
            dummy.scale.set(s, s, s);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, PETAL_COUNT]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={texture}
                transparent
                alphaTest={0.01}
                depthWrite={false}
                side={THREE.DoubleSide}
            />
        </instancedMesh>
    );
}
