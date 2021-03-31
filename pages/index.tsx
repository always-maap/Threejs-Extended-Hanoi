import { Suspense, useRef } from "react";
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
      for (let row = 7; row > 0; row--) {
        const step = RING.outer_radius + (col + 1) * (row + 1) * 0.05;
        r.push(
          <Ring
            key={`${col}${row}`}
            ref={(item) => ringRef.current[col].push(item)}
            position={[step + place, RING.depth * (7 - row + 1) + PLATFORM_ARGS.height, -step]}
            outerRadius={step}
          />
        );
      }
    }
    return r;
  };

  const moveRing = (from: number, to: number) => {
    const selectedRing = ringRef.current[from][ringRef.current[from].length - 1];

    const fromLength = ringRef.current[from].length;
    const toLength = ringRef.current[to].length;
    const toRing =
      to > from
        ? to - from === 2
          ? PEG_ARGS.space_between * 2
          : PEG_ARGS.space_between
        : to - from === -2
        ? -PEG_ARGS.space_between * 2
        : -PEG_ARGS.space_between;

    ringRef.current[from].pop();
    ringRef.current[to].push(selectedRing);

    const fromToDifferent = RING.depth * (toLength - fromLength + 1);

    setTimeout(() => (selectedRing.position.y += PEG_ARGS.height), 500);
    setTimeout(() => (selectedRing.position.x += toRing), 1000);
    setTimeout(() => (selectedRing.position.y -= PEG_ARGS.height - fromToDifferent), 1500);
  };

  return (
    <>
      <button onClick={() => moveRing(0, 2)}>move</button>
      <Canvas>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} minDistance={10} maxDistance={20} />
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
