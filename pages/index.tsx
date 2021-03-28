import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Color, DoubleSide } from "three";

const Ring = (props) => {
  return (
    <mesh {...props}>
      <torusBufferGeometry attach="geometry" args={[1, 0.25, 32, 100]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

const Plane = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[50, 50, 50]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" side={DoubleSide} />
    </mesh>
  );
};

const Platform = () => {
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxBufferGeometry attach="geometry" args={[15, 1, 1]} />
      <meshBasicMaterial attach="material" color={new Color("brown")} />
    </mesh>
  );
};

export default function Home() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Ring position={[5, 1.25, 0]} />
      <Ring position={[0, 1.25, 0]} />
      <Ring position={[-5, 1.25, 0]} />
      <Platform />
      <Plane />
    </Canvas>
  );
}
