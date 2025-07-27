"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: React.ComponentProps<typeof Points>) => {
    const ref = useRef<PointsType | null>(null);
    // Ensure the type is always Float32Array
    const [sphere] = useState<Float32Array>(() =>
        // Coerce the result to Float32Array to satisfy TypeScript and prevent TypedArray issues
        new Float32Array(
            random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
        )
    );

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                stride={3}
                positions={sphere}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);
