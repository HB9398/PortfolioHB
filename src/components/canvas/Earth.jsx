import React, { useRef, memo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf');

  return (
    //for earth scale=0.15
    <group scale={0.15} position={[0, 2, 0]} rotation={[0, Math.PI, 0]}> {/* Adjust scale and position */}

      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />

      <primitive object={scene} rotation={[-0.01, -0.2, -0.1]} />
    </group>
  );
};

// Wrap the component with React.memo to prevent unnecessary re-renders
export default memo(Earth);
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// const Earth = () => {
//   const { scene } = useGLTF('./planet/scene.gltf');


//   return (
//     <group >
      
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive object={scene} scale={0.12} position={[0, 1.5, 0]} rotation={[-0.01, -0.2, -0.1]} />
        
//     </group>

     
//   );
// };

// export default Earth;
