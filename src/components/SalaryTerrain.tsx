import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { trend, years } from '../data/salaries';

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const maxSal = 180000;

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(24, 14, years.length - 1, 2);
    const pos = geo.attributes.position;
    const salData = [trend.junior, trend.mid, trend.senior];

    for (let i = 0; i < pos.count; i++) {
      const ix = Math.round((pos.getX(i) + 12) / 24 * (years.length - 1));
      const iy = Math.round((pos.getY(i) + 7) / 14 * 2);
      const cx = Math.max(0, Math.min(years.length - 1, ix));
      const cy = Math.max(0, Math.min(2, iy));
      pos.setZ(i, (salData[cy][cx] / maxSal) * 10);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.2}
        roughness={0.5}
        flatShading
      />
    </mesh>
  );
}

function WireframeOverlay() {
  const maxSal = 180000;
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(24, 14, years.length - 1, 2);
    const pos = geo.attributes.position;
    const salData = [trend.junior, trend.mid, trend.senior];
    for (let i = 0; i < pos.count; i++) {
      const ix = Math.round((pos.getX(i) + 12) / 24 * (years.length - 1));
      const iy = Math.round((pos.getY(i) + 7) / 14 * 2);
      pos.setZ(i, (salData[Math.max(0,Math.min(2,iy))][Math.max(0,Math.min(years.length-1,ix))] / maxSal) * 10);
    }
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function DataPoints() {
  const maxSal = 180000;
  const salData = [trend.junior, trend.mid, trend.senior];
  const labels = ['Junior', 'Mid', 'Senior'];

  return (
    <group>
      {salData.map((row, y) =>
        row.map((val, x) => (
          <Float key={`${x}-${y}`} speed={2} floatIntensity={0.3}>
            <mesh position={[-12 + x * 3, (val / maxSal) * 10 + 0.3, -7 + y * 7]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial
                color="#c4b5fd"
                emissive="#c4b5fd"
                emissiveIntensity={1.5}
              />
            </mesh>
          </Float>
        ))
      )}
    </group>
  );
}

function AnimatedLight() {
  const ref = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(clock.elapsedTime * 0.4) * 10;
      ref.current.position.z = Math.cos(clock.elapsedTime * 0.4) * 10;
    }
  });
  return <pointLight ref={ref} color="#6366f1" intensity={4} distance={35} position={[0, 12, 0]} />;
}

export default function SalaryTerrain() {
  return (
    <section className="px-6 max-w-[1200px] mx-auto pt-16">
      <p className="text-[0.6rem] uppercase tracking-[3px] text-indigo font-bold mb-2">
        Three.js + React Three Fiber + Bloom
      </p>
      <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight mb-1">
        Maaş Topoğrafyası
      </h2>
      <p className="text-text-muted text-sm mb-6 max-w-lg leading-relaxed">
        Yatay: yıllar (2018→2026). Derinlik: seviye. Yükseklik: aylık net TRY. Sürükleyerek döndürün.
      </p>

      <div className="w-full h-[500px] rounded-2xl border border-border overflow-hidden bg-surface">
        <Canvas
          camera={{ position: [16, 12, 18], fov: 50 }}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}
        >
          <color attach="background" args={['#050508']} />
          <fog attach="fog" args={['#050508', 20, 60]} />

          <ambientLight color="#404060" intensity={0.4} />
          <directionalLight color="#a78bfa" intensity={1.8} position={[10, 15, 10]} />
          <AnimatedLight />

          <Terrain />
          <WireframeOverlay />
          <DataPoints />

          <gridHelper args={[30, 30, '#151520', '#0c0c14']} position={[0, -0.1, 0]} />

          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            autoRotate
            autoRotateSpeed={0.4}
            maxPolarAngle={Math.PI / 2.2}
          />

          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.4}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
}
