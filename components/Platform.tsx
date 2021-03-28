import { TextureLoader } from "three";
import { useLoader } from "react-three-fiber";

const Platform = () => {
  const WoodLightColor = useLoader(TextureLoader, "/assets/WoodLight/Color.jpg");
  const WoodLightNormal = useLoader(TextureLoader, "/assets/WoodLight/Normal.jpg");
  const WoodLightRoughness = useLoader(TextureLoader, "/assets/WoodLight/Roughness.jpg");

  return (
    <mesh position={[0, 0.25, 0]} castShadow>
      <boxBufferGeometry attach="geometry" args={[15, 0.5, 3]} />
      <meshStandardMaterial
        attach="material"
        roughnessMap={WoodLightRoughness}
        normalMap={WoodLightNormal}
        map={WoodLightColor}
      />
    </mesh>
  );
};

export default Platform;
