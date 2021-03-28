import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Plane from "../components/Plane";
import Platform from "../components/Platform";
import Ring from "../components/Ring";
import Peg from "../components/Peg";
import Lights from "../components/Lights";

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <Lights />
      <Suspense fallback={"loading..."}>
        <Ring position={[0.5, 2, -0.5]} outerRadius={0.5} />
        <Ring position={[1.5, 5.1, -1.5]} outerRadius={1.5} />
        <Peg position={[0, 4, 0]} />
        <Peg position={[5, 4, 0]} />
        <Peg position={[-5, 4, 0]} />
        <Platform />
        <Plane />
      </Suspense>
    </Canvas>
  );
}
