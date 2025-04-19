import { createRoot  } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

import './App.css';
import React from "react";

function RotatingBox() {
  const meshRef = useRef();


  useFrame(() => {
    if (meshRef.current){
      meshRef.current.rotation.x += 0;
      meshRef.current.rotation.y += 0;
    }
  });
  
  return(
    <mesh ref={meshRef}>
      <boxGeometry args={[5, 5, 5]}/>
      <meshStandardMaterial color="yellow"/>
    </mesh>
  );

}

function App() {
  return (
    <div id="canvas-container" className="App">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
export default App;
