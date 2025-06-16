import s from './body.module.css';
// import { Props } from './BlockCarusel';
import { useEffect, useRef } from 'react';
import { SphereBlock } from './mock/types';
interface CercleNavProps {
  blocks: SphereBlock[];
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  // setCurrentIndex: (cb: (prev: number) => number) => void;
}

// https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

export function CercleNav({blocks, setCurrentIndex, currentIndex,}: CercleNavProps) {
  const n = blocks.length;
  const step = 360 / n;

  const prevRef = useRef(currentIndex);
  const circleRef = useRef<HTMLDivElement>(null);
  console.log(circleRef, '📕');
  useEffect(() => {
    if (circleRef.current) {
      const diff = Math.abs(currentIndex - prevRef.current);
      circleRef.current.style.setProperty(
        '--transitionDuration',
        `${diff * 200}ms`
      );
    }
    prevRef.current = currentIndex;
  }, [currentIndex]);

  return (
    <>
      <div className={s.cercleParent}>
        <div className={s.cercle} ref={circleRef}>
          {blocks.map((obj, i) => {
            const deg = step * (i - currentIndex);

            return (
              <div
                key={obj.nameBlock}
                className={s.dot}
                style={{ '--degree': deg.toString() } as React.CSSProperties}
                onClick={() => setCurrentIndex(i)}
              >
                <div className={s.inner}>{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
