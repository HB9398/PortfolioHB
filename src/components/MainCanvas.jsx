

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from './Loader';


const MainCanvas = ({ children }) => {
  return (
    <Canvas
    className="z-10 bg-color"
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true}}
    
    camera={{
      fov: 45,
      position: [-4, 3, 6],
      near: 0.01, // Adjust near clipping plane
      far: 10000, // Adjust far clipping plane
      
    }}
    onCreated={({ gl }) => {
      gl.setPixelRatio(window.devicePixelRatio);
    }}
    >
    <hemisphereLight intensity={0.1} groundColor="black" />
    <pointLight intensity={5} />
    <Suspense fallback={<Loader />}>
    <OrbitControls
    enableZoom={false}
    autoRotate
    autoRotateSpeed={5}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
    />
    
    {children}
    </Suspense>
    </Canvas>
    );
  };
  
  export default MainCanvas;
  
  
  
  //old:
  /*import React from 'react';
  // import { Canvas } from '@react-three/fiber';
  // import { OrbitControls, Preload } from '@react-three/drei';
  // import Earth from './canvas/Earth';
  // import Computers from './canvas/Computers';
  // import Stars from './canvas/Stars';
  
  // const MainCanvas = () => {
  //   return (
  //     <Canvas
  //       frameloop='demand'
  //       shadows
  //       dpr={[1, 2]}
  //       camera={{ position: [20, 3, 5], fov: 45 }}
  //       gl={{ preserveDrawingBuffer: true }}
  //     >
  //       <OrbitControls
  //         enableZoom={false}
  //         maxPolarAngle={Math.PI / 2}
  //         minPolarAngle={Math.PI / 2}
  //       />
  
  //       <Preload all />
  
  //       <Earth />
  
  //       <Computers />
  
  //       <Stars />
  //     </Canvas>
  //   );
  // };
  
  // export default MainCanvas;*/
  