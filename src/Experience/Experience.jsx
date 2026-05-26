import { Canvas} from "@react-three/fiber";
import { PerspectiveCamera, CameraControls} from "@react-three/drei";
import Scene from "./Scene.jsx";
import { useRef, useEffect, useState } from "react";

export default function Experience() {
  const defaultRotation = [-1.589033127021175 ,-1.494676645023899 ,-1.5890860769718902];
  const cameraRef = useRef()

return (
  <>
    <Canvas id="canvas" flat="true"
      style={{ position: "fixed", zIndex: 1, top: 0, left: 0 }}>
      <PerspectiveCamera  ref={cameraRef} makeDefault 
  // position={[1,1,1]}
   target={[0.07583093240106387, 1.2124000903142451, 0.4246630151982583]} 
   position={[0.07583093240106387, 1.2124000903142451, 0.4246630151982583]} 
   rotation={defaultRotation} 
    >
      </ PerspectiveCamera>
      {/* <CameraControls  /> */}
      {/* <PointerLockControls pointerSpeed={0.1}/> */}
      <Scene camera={cameraRef}  />
    </Canvas>
  </>
);
}
