import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Plane from "../components/Plane";
import Platform from "../components/Platform";
import Ring from "../components/Ring";
import Peg from "../components/Peg";

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Ring position={[0.5, 2, -0.5]} outerRadius={0.5} />
      <Ring position={[1.5, 5.1, -1.5]} outerRadius={1.5} />
      <Peg position={[0, 4, 0]} />
      <Peg position={[5, 4, 0]} />
      <Peg position={[-5, 4, 0]} />
      <Suspense fallback={"loading..."}>
        <Platform />
      </Suspense>
      <Plane />
    </Canvas>
  );
}
