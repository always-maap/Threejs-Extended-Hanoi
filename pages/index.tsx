import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Plane from "../components/Plane";
import Platform from "../components/Platform";
import Ring from "../components/Ring";
import Peg from "../components/Peg";
import Lights from "../components/Lights";
import { PEGS, PLATFORM_ARGS, RING } from "../constants/sizes";

export default function Home() {
  const drawRings = () => {
    const r = [];
    for (let i = 0; i < 7; i++) {
      const step = RING.outer_radius + i * 0.2;
      r.push(<Ring position={[step, (i + 1) * PLATFORM_ARGS.height, -step]} outerRadius={step} />);
    }
    return r;
  };

  return (
    <Canvas>
      <OrbitControls />
      <Lights />
      <Suspense fallback={"loading..."}>
        {drawRings()}

        {Object.keys(PEGS).map((i) => {
          const position = [PEGS[i].width, PEGS[i].height, PEGS[i].depth];
          return <Peg key={i} position={position} />;
        })}

        <Platform />
        <Plane />
      </Suspense>
    </Canvas>
  );
}
