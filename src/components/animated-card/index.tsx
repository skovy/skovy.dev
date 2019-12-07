import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (
  x: number,
  y: number,
  scale: number
): [number, number, number] => [
  -(y - window.innerHeight / 2) / 80,
  (x - window.innerWidth / 2) / 80,
  scale
];

const trans = (x: number, y: number, s: number) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface Props {
  scale?: number;
}

export const AnimatedCard: React.FC<Props> = ({ children, scale = 1.02 }) => {
  const [animateProps, set] = useSpring(() => ({
    xys: [0, 0, 1] as [number, number, number],
    config: { mass: 5, tension: 350, friction: 80 }
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y, scale) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: animateProps.xys.interpolate(trans as any) }}
    >
      {children}
    </animated.div>
  );
};
