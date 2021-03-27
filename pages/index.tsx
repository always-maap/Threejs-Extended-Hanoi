import { Canvas } from "react-three-fiber";

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <mesh>
        <torusBufferGeometry attach="geometry" args={[1, 0.5, 32, 100]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    </Canvas>
  );
}
