import { Color, TextureLoader } from "three";
import { useLoader } from "react-three-fiber";

const Platform = () => {
  const door = useLoader(TextureLoader, "/assets/WoodLight/Color.jpg");

  return (
    <mesh position={[0, 0.25, 0]}>
      <boxBufferGeometry attach="geometry" args={[15, 0.5, 3]} />
      <meshBasicMaterial attach="material" color={new Color("brown")} map={door} />
    </mesh>
  );
};

export default Platform;
