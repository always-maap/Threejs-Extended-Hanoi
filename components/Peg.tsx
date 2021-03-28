import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Peg = (props) => {
  const WoodChipsTexture = useLoader(TextureLoader, "/assets/WoodChips/Color.jpg");

  return (
    <mesh {...props}>
      <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 8, 64]} />
      <meshBasicMaterial attach="material" map={WoodChipsTexture} />
    </mesh>
  );
};

export default Peg;
