import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Peg = (props) => {
  const WoodChipsAmbientOcclusionTexture = useLoader(TextureLoader, "/assets/WoodChips/AmbientOcclusion.jpg");
  const WoodChipsColorTexture = useLoader(TextureLoader, "/assets/WoodChips/Color.jpg");
  const WoodChipsNormalTexture = useLoader(TextureLoader, "/assets/WoodChips/Normal.jpg");
  const WoodChipsRoughnessTexture = useLoader(TextureLoader, "/assets/WoodChips/Roughness.jpg");

  return (
    <mesh {...props} castShadow>
      <cylinderBufferGeometry attach="geometry" args={[0.25, 0.25, 8, 64]} />
      <meshStandardMaterial
        attach="material"
        map={WoodChipsColorTexture}
        aoMap={WoodChipsAmbientOcclusionTexture}
        normalMap={WoodChipsNormalTexture}
        roughnessMap={WoodChipsRoughnessTexture}
      />
    </mesh>
  );
};

export default Peg;
