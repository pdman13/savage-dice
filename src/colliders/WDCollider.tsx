import { ConvexHullCollider } from "@react-three/rapier";

const vertices = [
  -0.8, -0.8, 0.8, -0.8, 0.8, 0.8, -0.8, -0.8, -0.8, -0.8, 0.8, -0.8, 0.8, -0.8,
  0.8, 0.8, 0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0.8, -0.8,
].map((n) => n / 10);

export function WDCollider() {
  return <ConvexHullCollider args={[vertices]} />;
}
