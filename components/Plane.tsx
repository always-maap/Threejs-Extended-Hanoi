import { DoubleSide, TextureLoader } from "three";

const Plane = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[50, 50, 50]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" side={DoubleSide} />
    </mesh>
  );
};

export default Plane;
