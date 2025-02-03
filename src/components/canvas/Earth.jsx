import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Earth = () => {
  const { scene, animations } = useGLTF('/assets/earth/scene.gltf');
  const mixerRef = useRef(null);

  // Update the animation frame
  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  return (
    <group scale={0.05} position={[0, -1, 0]}>
  
      <primitive object={scene} />
    </group>
  );
};

export default React.memo(Earth);
