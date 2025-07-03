
import styled from 'styled-components';
import s from './body.module.css';
import {response} from './mock/storageData.js';
import { BlockCarusel } from './BlockCarusel';
import { CercleNav } from './CercleNav';
import { useState } from 'react';



const StyledBody = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 0.3s;
`;


export function Body() {
   const [currentIndex, setCurrentIndex] = useState(0);


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
      return Math.min(prev + 1, response.length - 1);
    });
  }
  return (
    <>
    <StyledBody>
      {/* <div className={s.container}>

    </div> */}
      <div className={s.lineVertical}> </div>
      <div className={s.rightLine}> </div>
      <div className={s.leftLine}> </div>
      <div className={s.lineHorisontal}></div>
      
      <CercleNav
      blocks={response}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      />
      <div className={s.gradientHeader} ></div>
      <div className={s.headerName} > Исторические даты </div>
      <div>
        {/* {response.map(obj => {
            return (
                <div> {obj.nameBlock} </div>
            )
        })} */}
        {/* <button onClick={} > {'>'} </button> */}
        <BlockCarusel
        blocks = {response}
        onPrev={onPrev}
        onNext={onNext}
        currentIndex={currentIndex}
        />
      </div>
    </StyledBody>
    
    </>
  );
}
