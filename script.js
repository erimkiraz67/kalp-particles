const geometry = new THREE.BufferGeometry()
                          .setFromPoinsts(vertices);
const material = new THREE.PointsMaterial(
  {color: 0xee5282, blending:
    THREE.AdditiveBlending, size: 3} );
const Particles = new THREE.Pooints(geometry, material);
Particles.position.x -= 600 / 2;
Particles.position.y += 552 / 2;
screen.add(Particles);
gsap.fromTo(screen.rotation, {y: -0.2}, {
  y: 0.2, repeat: -1,
  yoyo: true, ease: "power2.inOut",
  duration: 3
});
