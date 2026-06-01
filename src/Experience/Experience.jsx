import { Canvas} from "@react-three/fiber";
import { PerspectiveCamera, CameraControls} from "@react-three/drei";
import Scene from "./Scene.jsx";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import {usePDF, useFilm} from "../UIStore.jsx"

export default function Experience() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const {isPDFOpen} = usePDF();
  const {isFilmOpen} = useFilm();

  const [frameLoop, setFrameLoop] = useState("always"); 
  useEffect(() => {
    if (isPDFOpen | isFilmOpen) {
      setFrameLoop("demand")
    } else {
      setFrameLoop("always")
    }
  }, [isPDFOpen, isFilmOpen])
  const defaultRotation = [-1.589033127021175 ,-1.494676645023899 ,-1.5890860769718902];
  const cameraRef = useRef()

return (
  <>
    <Canvas id="canvas" flat="true"
      className="mainCanvas"
      frameloop={frameLoop}
      style={isSmallDevice ? { position: "relative", zIndex: 1, bottom: 0, left: 0, height: "90svh" } : { position: "fixed", zIndex: 1, bottom: 0, left: 0, height: "90svh" } }>
      <PerspectiveCamera  ref={cameraRef} makeDefault 
        zoom={isSmallDevice ? 0.4 : 1.2}
        target={[0.07583093240106387, 1.2124000903142451, 0.4246630151982583]} 
        position={[0.07583093240106387, 1.1824000903142451, 0.4246630151982583]} 
        rotation={defaultRotation} >
      </ PerspectiveCamera>
      {/* <CameraControls  /> */}
      {/* <PointerLockControls pointerSpeed={0.1}/> */}
      <Scene camera={cameraRef}  />
    </Canvas>
  </>
);
}
