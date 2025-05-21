import s from './/body.module.css';
import { useState } from 'react';
import { SphereBlock, Description } from './mock/types';

interface Props {
  blocks: SphereBlock[];
}
export function BlockCarusel({ blocks }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = blocks.length - 1;
  const block = blocks[currentIndex];

  console.log(currentIndex, lastIndex);
  function getYearPeriod<T extends Description>(data: T[]) {
    return {
      startYear: data[0].yaer,
      endYear: data[data.length - 1].yaer,
    };
  }
  const { startYear, endYear } = getYearPeriod(block.data);

  function onPrev() {
    setCurrentIndex((prev) => {
      return Math.max(prev - 1, 0);
    });
  }
  function onNext() {
    setCurrentIndex((prev) => {
      // if(prev + 1 > blocks.length - 1) {
      //     return 0
      // }
      return Math.min(prev + 1, blocks.length - 1);
    });
  }

  return (
    <>
      <div className={s.yearsStartEnd} style={{ display: 'flex', flex: '1' }}>
        <div className={s.bigYears}>{startYear}</div>
        <div className={s.bigYears} style={{ color: '#ef5dbc' }}>
          {endYear}
        </div>
      </div>
      {/* <p className={s.yearsStartEnd}>
        {startYear} - {endYear}
      </p> */}
      <p className={s.buttonLeft} style={{ top: '730px', left: '410px' }}>
        {' '}
        {(currentIndex + 1).toString().padStart(2, '0')} /{' '}
        {(lastIndex + 1).toString().padStart(2, '0')}
      </p>
      <button onClick={onPrev} className={s.buttonLeft}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            transform="matrix(-1 0 0 1 50 0)"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <path
            d="M27.4999 18.75L21.2499 25L27.4999 31.25"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button onClick={onNext} className={s.buttonRight}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <path
            d="M22.5001 18.75L28.7501 25L22.5001 31.25"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        className={s.viewport}
        style={{ position: 'absolute', top: '92vh', left: '32vw' }}
      >
        <div
          //   className={s.descriptionEvents} style={{ margin: '0 20% 0 16%' }}
          className={s.track}
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {blocks.map((block, idx) => (
            <div className={s.slide} key={idx}>
              {block.data.map((obj) => {
                return (
                  <div key={obj.yaer} className={s.slideItem}>
                    <h3> {obj.yaer}</h3>
                    <p className={s.descriptionText}> {obj.description}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <button
        style={{
          position: 'absolute',
          left: '182vh',
          top: '105vh',
          fontSize: '2rem',
          borderRadius: '50%',
          background: 'none',
          opacity: currentIndex === lastIndex ? '0' : '0.5',
        }}
        onClick={onNext}
      >
        {' '}
        {'>'}
      </button>
      <button
        style={{
          position: 'absolute',
          left: '40vh',
          top: '105vh',
          fontSize: '2rem',
          borderRadius: '50%',
          background: 'none',
          opacity: currentIndex === 0 ? '0' : '0.5',
        }}
        onClick={onPrev}
      >
        {' '}
        {'<'}
      </button>
    </>
  );
}



























// Искользую при отрисовке только один блок из blocks
// import s from './/body.module.css';
// import { useState } from 'react';
// import { SphereBlock, Description } from './mock/types';

// interface Props {
//   blocks: SphereBlock[];
// }
// export function BlockCarusel({ blocks }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const lastIndex = blocks.length - 1;
//   const block = blocks[currentIndex];

// console.log(currentIndex, lastIndex)
//   function getYearPeriod<T extends Description>(data: T[]) {
//     return {
//       startYear: data[0].yaer,
//       endYear: data[data.length - 1].yaer,
//     };
//   }
//   const { startYear, endYear } = getYearPeriod(block.data);

//   function onPrev() {
//     setCurrentIndex((prev) => {
//       return Math.max(prev - 1, 0);
//     });
//   }
//   function onNext() {
//     setCurrentIndex((prev) => {
//       // if(prev + 1 > blocks.length - 1) {
//       //     return 0
//       // }
//       return Math.min(prev + 1, blocks.length - 1);
//     });
//   }

//   return (
//     <>
//       <p className={s.yearsStartEnd}>
//         {startYear} - {endYear}
//       </p>
//       <p className={s.buttonLeft} style={{ top: '730px', left: '410px' }}>
//         {' '}
//         {(currentIndex + 1).toString().padStart(2, '0')} /{' '}
//         {(lastIndex + 1).toString().padStart(2, '0')}
//       </p>
//       <button onClick={onPrev} className={s.buttonLeft}>
//         <svg
//           width="50"
//           height="50"
//           viewBox="0 0 50 50"
//           overflow="visible"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             cx="25"
//             cy="25"
//             r="24.5"
//             transform="matrix(-1 0 0 1 50 0)"
//             stroke="currentColor"
//             strokeOpacity="0.5"
//           />
//           <path
//             d="M27.4999 18.75L21.2499 25L27.4999 31.25"
//             stroke="currentColor"
//             strokeWidth="2"
//           />
//         </svg>
//       </button>
//       <button onClick={onNext} className={s.buttonRight}>
//         <svg
//           width="50"
//           height="50"
//           viewBox="0 0 50 50"
//           overflow="visible"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             cx="25"
//             cy="25"
//             r="24.5"
//             stroke="currentColor"
//             strokeOpacity="0.5"
//           />
//           <path
//             d="M22.5001 18.75L28.7501 25L22.5001 31.25"
//             stroke="currentColor"
//             strokeWidth="2"
//           />
//         </svg>
//       </button>
//       <div style={{ position: 'absolute', top: '105vh', padding: '0 35px 0 35px' }}>
//         <div className={s.descriptionEvents}
//         style={{margin: '0 20% 0 16%'}}>
//           {
//             blocks[currentIndex].data.map((obj) => {
//               return (
//                 <div key={obj.yaer} style={{ padding: '0 25px 0 25px' }}>
//                   <h3> {obj.yaer}</h3>
//                   <p className={s.descriptionText}> {obj.description}</p>
//                 </div>
//               );
//             })
//           }
//         </div>
//       </div>
//       <button
//       style={{position: 'absolute', left: '210vh', top: '118vh', fontSize: '2rem', borderRadius: '50%', background: 'none', opacity: '0.5'}}
//       onClick={() => setCurrentIndex((prev) => Math.min((prev + 1), lastIndex))}
//        > {'>'}</button>
//        <button
//        style={{position: 'absolute', left: '40vh', top: '118vh', fontSize: '2rem', borderRadius: '50%', background: 'none', opacity: '0.5'}}
//        onClick={() => setCurrentIndex((prev) => Math.max((prev - 1), 0))}
//        > {'<'}</button>
//     </>
//   );
// }
