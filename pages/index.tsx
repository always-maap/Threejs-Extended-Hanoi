import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Plane from "../components/Plane";
import Platform from "../components/Platform";
import Ring from "../components/Ring";
import Peg from "../components/Peg";
import Lights from "../components/Lights";
import { PEG_ARGS, PEGS, PLATFORM_ARGS, RING } from "../constants/sizes";

export default function Home() {
  const ringRef = useRef([[], [], []]);

  const drawRings = () => {
    const r = [];
    for (let col = 0; col < 3; col++) {
      const place = col === 0 ? PEGS.left.width : col === 1 ? PEGS.middle.width : PEGS.right.width;
      for (let row = 2; row > 0; row--) {
        const step = RING.outer_radius + (col + 1) * (row + 1) * 0.05;
        r.push(
          <Ring
            key={`${col}${row}`}
            ref={(item) => ringRef.current[col].push(item)}
            position={[step + place, RING.depth * (2 - row + 1) + PLATFORM_ARGS.height, -step]}
            outerRadius={step}
          />
        );
      }
    }
    return r;
  };

  const moveRing = () => {
    setTimeout(() => (ringRef.current[0][0].position.y += PEG_ARGS.height), 500);
    setTimeout(() => (ringRef.current[0][0].position.x += 7), 1000);
    setTimeout(() => (ringRef.current[0][0].position.y -= PEG_ARGS.height), 1500);
  };

  return (
    <>
      <button onClick={moveRing}>move</button>
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
    </>
  );
}
