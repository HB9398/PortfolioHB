// Ball.jsx
import React, { memo } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';

const Ball = ({ imgUrl, name, isMobile }) => {
  const [decalTexture] = useTexture([imgUrl]);

  const ballScale = isMobile ? 0.05 : 2.1; // Adjust the scale for mobile

  return (
    <Float speed={1.75} rotationIntensity={3} floatIntensity={0.5}>
      {/* Remove lights that are not needed */}
      <ambientLight intensity={0.25} />

      <mesh castShadow receiveShadow scale={ballScale}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

        {/* Remove one Decal to simplify the scene */}
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} map={decalTexture} transparent />
        <Decal position={[0, 0, -1]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} map={decalTexture} transparent />
      </mesh>
    </Float>
  );
};

export default memo(Ball);

// // Ball.jsx
// import React from 'react';
// import { Decal, Float, useTexture } from '@react-three/drei';

// const Ball = ({ imgUrl, name, isMobile }) => {
//   const [decalTexture] = useTexture([imgUrl]);

//   const ballScale = isMobile ? 0.5 : 2.1;

//   return (
//     <>
//       <Float speed={1.75} rotationIntensity={1.5} floatIntensity={1.5}>
//         <ambientLight intensity={0.25} />
//         <directionalLight position={[0, 0, 0.05]} />

//         <mesh castShadow receiveShadow scale={ballScale}>
//           <icosahedronGeometry args={[1, 1]} />

//           <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
//           <Decal
//             position={[0, 0, 1]}
//             rotation={[0, 0, 0]}
//             scale={[1.5, 1.5, 1.5]}
//             map={decalTexture}
//             transparent
//           />

//           <Decal
//             position={[0, 0, -1]}
//             rotation={[0, Math.PI, 0]}
//             scale={[1.5, 1.5, 1.5]}
//             map={decalTexture}
//             transparent
//           />
//         </mesh>
//       </Float>
//     </>
//   );
// };

// export default Ball;


/*
const BallCanvas =({icon}) =>{
  return(
    <Canvas 
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all/>  
    </Canvas>
  )
}
export default BallCanvas*/