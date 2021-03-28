import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Ring = (props) => {
  const WoodDarkAmbientOcclusionTexture = useLoader(TextureLoader, "/assets/WoodDark/AmbientOcclusion.jpg");
  const WoodDarkColorTexture = useLoader(TextureLoader, "/assets/WoodDark/Color.jpg");
  const WoodDarkNormalTexture = useLoader(TextureLoader, "/assets/WoodDark/Normal.jpg");
  const WoodDarkRoughnessTexture = useLoader(TextureLoader, "/assets/WoodDark/Roughness.jpg");

  const outerRadius = props.outerRadius;
  const innerRadius = 0.25;
  const depth = 0.5;

  const arcShape = new THREE.Shape();
  arcShape.moveTo(outerRadius * 2, outerRadius);
  arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
  const holePath = new THREE.Path();
  holePath.moveTo(outerRadius + innerRadius, outerRadius);
  holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
  arcShape.holes.push(holePath);

  return (
    <mesh {...props} rotation={[Math.PI / 2, 0, Math.PI / 2]} castShadow>
      <extrudeGeometry
        attach="geometry"
        args={[arcShape, { bevelEnabled: false, steps: 1, curveSegments: 60, depth }]}
      />
      <meshStandardMaterial
        attach="material"
        map={WoodDarkColorTexture}
        aoMap={WoodDarkAmbientOcclusionTexture}
        normalMap={WoodDarkNormalTexture}
        roughnessMap={WoodDarkRoughnessTexture}
      />
    </mesh>
  );
};

export default Ring;
