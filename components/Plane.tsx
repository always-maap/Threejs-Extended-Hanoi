import * as THREE from "three";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "react-three-fiber";

const Plane = () => {
  const GrassAmbientOcclusionTexture = useLoader(TextureLoader, "/assets/Grass/AmbientOcclusion.jpg");
  const GrassColorTexture = useLoader(TextureLoader, "/assets/Grass/Color.jpg");
  const GrassNormalTexture = useLoader(TextureLoader, "/assets/Grass/Normal.jpg");
  const GrassRoughnessTexture = useLoader(TextureLoader, "/assets/Grass/Roughness.jpg");
  const textures = [GrassAmbientOcclusionTexture, GrassColorTexture, GrassNormalTexture, GrassRoughnessTexture];
  textures.forEach((texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
  });

  return (
    <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[100, 100, 100]}>
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={GrassColorTexture}
        aoMap={GrassAmbientOcclusionTexture}
        roughnessMap={GrassRoughnessTexture}
        normalMap={GrassNormalTexture}
        side={DoubleSide}
      />
    </mesh>
  );
};

export default Plane;
