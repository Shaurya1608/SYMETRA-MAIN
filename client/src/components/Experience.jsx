import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, Float, ContactShadows, useAnimations, OrbitControls } from '@react-three/drei'

function Model({ path, ...props }) {
  const { scene, animations } = useGLTF(path)
  const group = useRef()
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]].fadeIn(0.5).play()
    }
  }, [actions, names])



  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  )
}

export function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
      {/* Soft Blue Glow Behind Model */}
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] pointer-events-none opacity-50"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 150, 255, 0.15) 0%, transparent 70%)',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 35 }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
              <Model 
                path="/videos/apple-vision-pro.glb" 
                scale={isMobile ? 2.0 : 2.6} 
                position={isMobile ? [0, -0.4, 0] : [0, -0.1, 0]} 
                rotation={[0, 0, 0]} 
              />
            </Float>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true} 
            autoRotateSpeed={1.5}
            makeDefault 
          />
          <Stage intensity={1.2} environment="city" adjustCamera={false} center={false} />
          <ContactShadows 
              position={[0, -1.5, 0]} 
              opacity={0.15} 
              scale={10} 
              blur={2.5} 
              far={1.5} 
              color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
