import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Models/MyRoom2.jsx";
import { dampE } from "maath/easing";
import { Text } from "@react-three/drei"; 
import * as THREE from 'three';

export default function Scene({camera}) {
  const textColor = new THREE.Color(0xe2cfbc)

  useFrame(({pointer})=>{
    // console.log(camera.current.position)
    // console.log(camera.current.rotation)
    // console.log(pointer.y)
    if (pointer.x > 0.7 && pointer.y < 0.67 ) {
        dampE(camera.current.rotation, [-2.804600345841396, -1.3904606126273387, -2.809669672806236], 0.7 );
    }; 
    if (pointer.x < 0.7 && pointer.x > -0.7 | pointer.y > 0.67) {
      dampE(camera.current.rotation, [-1.589033127021175 ,-1.494676645023899 ,-1.5890860769718902], 0.7 );
    }; 
    if (pointer.x < -0.7 && pointer.y < 0.67) {
      dampE(camera.current.rotation, [-0.504600345841396, -1.3904606126273387, -0.509669672806236], 0.7 );
    };
  })

  return(
    <Suspense >
      <Model/>
      <Text depthOffset={1} color={textColor} clipRect={[0,-1,1,1]} anchorX="left" anchorY="middle" maxWidth={5} whiteSpace='normal' position={[0.850, 0.939, 0.066]} 
      rotation={[-0.3, -0.6, -0.18]} fontSize={0.0065} >
         Portrait of A Time 
      </Text>
    </Suspense >
  );
};
