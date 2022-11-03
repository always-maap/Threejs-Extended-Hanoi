import React, { Suspense, useContext, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import Plane from "../components/Plane";
import Platform from "../components/Platform";
import Ring from "../components/Ring";
import Peg from "../components/Peg";
import Lights from "../components/Lights";
import { PEG_ARGS, PEGS, PLATFORM_ARGS, RING } from "../constants/sizes";
import { useRouter } from "next/router";
import { HanoiContext } from "./_app";
import { button, useControls } from "leva";

export default function Home() {
  const [hanoiHistory] = useContext(HanoiContext);
  const { query, push } = useRouter();
  const { ringInPeg } = query;

  // TODO: Refactor these functionality

  const ringRef = useRef([[], [], []]);

  const fill = () => {
    let idx = 0.35;
    let curr = 0;
    let ringSizes = [[], [], []];
    const fillArr = () => {
      if (curr < +ringInPeg) {
        for (let j = 0; j < 3; j++) {
          ringSizes[j].push(idx);
          idx += 0.1;
        }
        curr++;
        fillArr();
      }
      return ringSizes;
    };
    return fillArr();
  };

  const drawRings = () => {
    const yy = fill();
    const rr = [];
    yy.map((col, ci) => {
      const place = ci === 0 ? PEGS.left.width : ci === 1 ? PEGS.middle.width : PEGS.right.width;
      return col.map((row, ri) => {
        rr.push(
          <Ring
            key={`${col}${row}`}
            ref={(item) => ringRef.current[ci].push(item)}
            position={[row + place, RING.depth * (+ringInPeg - ri) + PLATFORM_ARGS.height, -row]}
            outerRadius={row}
          />
        );
      });
    });
    return rr;
  };

  const moveRing = (from: number, to: number) => {
    const selectedRing = ringRef.current[from][0];

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

    ringRef.current[from].shift();
    ringRef.current[to].unshift(selectedRing);

    const fromToDifferent = RING.depth * (toLength - fromLength + 1);

    setTimeout(() => (selectedRing.position.y += PEG_ARGS.height), 500);
    setTimeout(() => (selectedRing.position.x += toRing), 1000);
    setTimeout(() => (selectedRing.position.y -= PEG_ARGS.height - fromToDifferent), 1500);
  };

  const start = () => {
    const table = {
      A: 2,
      B: 1,
      C: 0,
    };

    if (hanoiHistory.length === 0) {
      push("/");
    }

    hanoiHistory.forEach((i, index) => {
      setTimeout(() => moveRing(table[i.from], table[i.to]), index * 1500);
    });
  };

  const _ = useControls({ move: button(start) });

  return (
    <>
      <Canvas shadowMap>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Stars />
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
