import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Computers = () => {
  // Use a simplified model with a lower-poly count if available
  const { scene, animations } = useGLTF('./cute_robot/scene.gltf');
  const mixerRef = useRef();

  // Create a mixer and store it in the ref
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  // Get the main animation clip from the animations array
  const animationClip = animations[0];

  // Play the animation when the component mounts
  useEffect(() => {
    if (animationClip) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      const action = mixer.clipAction(animationClip);
      action.play();
    }
  }, [animationClip]);

  return (
    //scale=1
    <group position={[0, -0.7, -0.5]}>
      <primitive object={scene} scale={1} position={[0, -1, 0]} rotation={[-0.01, -0.2, -0.1]} />
    </group>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Computers);


   // import React, { useRef } from 'react';
    // import { useGLTF } from '@react-three/drei';
    // import { useFrame } from '@react-three/fiber';

    // const Computers = () => {
    //   const { scene } = useGLTF('./sci_fi/scene.gltf');

      

    //   return (
    //     <group position={[-0, -0.7, -0.5]}> /
      
    //       <primitive object={scene} scale={1} position={[0,-1,0]} rotation={[-0.01, -0.2, -0.1]} />
    //     </group>
    //   );
    // };

    // export default Computers;

/*
const ComputersCanvas = () =>{ 

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return(
    <Canvas frameloop='demand'
    shadows
    camera={{position:[20, 3, 5], fov:35}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>  
    </Canvas>
  )

}
export default ComputersCanvas


/*

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene2.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas; */