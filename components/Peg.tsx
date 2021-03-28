import * as THREE from "three";

const Peg = (props) => {
  return (
    <mesh {...props}>
      <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 8, 64]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Peg;
