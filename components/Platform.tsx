import { TextureLoader } from "three";
import { useLoader } from "react-three-fiber";
import { PLATFORM_ARGS } from "../constants/sizes";

const Platform = () => {
  const WoodLightColor = useLoader(TextureLoader, "/assets/WoodLight/Color.jpg");
  const WoodLightNormal = useLoader(TextureLoader, "/assets/WoodLight/Normal.jpg");
  const WoodLightRoughness = useLoader(TextureLoader, "/assets/WoodLight/Roughness.jpg");

  return (
    <mesh position={[0, PLATFORM_ARGS.height / 2, 0]} castShadow>
      <boxBufferGeometry attach="geometry" args={[PLATFORM_ARGS.width, PLATFORM_ARGS.height, PLATFORM_ARGS.depth]} />
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
