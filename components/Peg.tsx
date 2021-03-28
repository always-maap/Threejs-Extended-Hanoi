import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import { PEG_ARGS } from "../constants/sizes";

const Peg = (props) => {
  const WoodChipsAmbientOcclusionTexture = useLoader(TextureLoader, "/assets/WoodChips/AmbientOcclusion.jpg");
  const WoodChipsColorTexture = useLoader(TextureLoader, "/assets/WoodChips/Color.jpg");
  const WoodChipsNormalTexture = useLoader(TextureLoader, "/assets/WoodChips/Normal.jpg");
  const WoodChipsRoughnessTexture = useLoader(TextureLoader, "/assets/WoodChips/Roughness.jpg");

  return (
    <mesh {...props} castShadow>
      <cylinderBufferGeometry
        attach="geometry"
        args={[PEG_ARGS.radius_top, PEG_ARGS.radius_bottom, PEG_ARGS.height, PEG_ARGS.radius_segments]}
      />
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
