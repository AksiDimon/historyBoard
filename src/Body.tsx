import s from './body.module.css';
import {response} from './mock/storageData.js';
import { BlockCarusel } from './BlockCarusel';


export function Body() {
   
  return (
    <>
      <div className={s.lineVertical}> </div>
      <div className={s.rightLine}> </div>
      <div className={s.leftLine}> </div>
      <div className={s.lineHorisontal}></div>
      <div className={s.cercle}> </div>
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
        />
      </div>
    </>
  );
}
