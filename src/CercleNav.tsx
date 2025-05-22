import s from './body.module.css';
// import { Props } from './BlockCarusel';
// import { useState } from 'react';
import { SphereBlock } from './mock/types';
interface CercleNavProps {
    blocks:  SphereBlock[];
    setCurrentIndex: (value: number) => void;
    // setCurrentIndex: (cb: (prev: number) => number) => void;
}
export function CercleNav({ blocks, setCurrentIndex }: CercleNavProps) {

  const n = blocks.length;
  const step: number = 360 / n;
  // радиус в пикселях — половина ширины контейнера минус пол-диаметра точки
  const radius: number = 300 - 6; // если .cercle 300px и .dot 12px
  return (
    <>
      <div className={s.cercle}>
        {blocks.map((obj, i) => {
          const angle = step * i - 90; // -90° чтобы первая была сверху
          return (
            <div
              key={obj.nameBlock}
              className={s.dot}
              style={{
                transform: `
          rotate(${angle}deg)
          translate(0, -${radius + 7}px)
          rotate(${-angle }deg)
        `,
              }}
              onClick={() => setCurrentIndex(i)}
            >
                {i + 1}
                {/* <div className={s.hoveredBlock} ></div> */}
              {' '}
            </div>
          );
          //   <div key={obj.nameBlock}> {obj.nameBlock}</div>;
        })}
      </div>
    </>
  );
}
