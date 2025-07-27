import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type * as THREE from "three";

// Use 'any' for props to get around the TS/JSX intrinsic types issue
export const Target = (props: any) => {
  const targetRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF("/models/target.gltf");

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
    >
      <primitive object={scene} />
    </mesh>
  );
};
