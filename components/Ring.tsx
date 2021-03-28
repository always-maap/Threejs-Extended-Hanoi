import * as THREE from "three";

const Ring = (props) => {
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
    <mesh {...props} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
      <extrudeGeometry
        attach="geometry"
        args={[arcShape, { bevelEnabled: false, steps: 1, curveSegments: 60, depth }]}
      />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Ring;
