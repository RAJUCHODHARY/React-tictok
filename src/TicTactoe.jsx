import { useRef, useState } from 'react';
import './Tic.css';
let data = ["", "", "", "", "", "", "", "", ""];
let x = "x", o = "o";
function TicTactoe() {

   let [count, setCount] = useState(0)
   let [lock, setLock] = useState(false)
   let titelRef = useRef(null);
   let box1 = useRef(null);
   let box2 = useRef(null);
   let box3 = useRef(null);
   let box4 = useRef(null);
   let box5 = useRef(null);
   let box6 = useRef(null);
   let box7=useRef(null);
   let box8=useRef(null);
   let box9=useRef(null)
   let boxarr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
   const Togel = (e, num) => {
      if (lock) {
         return 0;
      }
      if (count % 2 === 0) {
         e.target.innerHTML = x;
         data[num] = "X";
         setCount(++count)
      }
      else {
         e.target.innerHTML = o;
         data[num] = "o";
         setCount(++count)
      }
      Checkwin();
   }
   const Checkwin = () => {
      if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
         Won(data[2])
      }
      else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
         Won(data[5])
      }
      else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
         Won(data[8])
      }
      else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
         Won(data[6])
      }
      else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
         Won(data[7])
      }
      else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
         Won(data[8])
      }
      else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
         Won(data[8])
      }
      else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
         Won(data[2])
      }
      else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
         Won(data[6])
      }
   }
   const Won = (winner) => {
      setLock(true)
      if (winner === "x") {
         titelRef.current.innerHTML = `Congratulation  ${x} Win `
      }
      else {
         titelRef.current.innerHTML = `Congratulation <span> ${o} </span>  Win `
      }
   }
   const Reaset = () => {
      setLock(false);
      data = ["", "", "", "", "", "", "", "", ""];
      titelRef.current.innerHTML = `Tic Tac Toe Game<span> React</span>`;
      boxarr.map((e)=>{
        return e.current.innerHTML="";
      })
   }
   return (
      <div className='contaner'>
         <h1 className='titel' ref={titelRef}>Tic Tac Toe Game <span>React</span></h1>
         <div className='borde'>
            <div className="row1">
               <div className="col" ref={box1} onClick={(e) => { Togel(e, 0) }}></div>
               <div className="col" ref={box2} onClick={(e) => { Togel(e, 1) }}></div>
               <div className="col" ref={box3} onClick={(e) => { Togel(e, 2) }}></div>
            </div>
            <div className="row2">
               <div className="col" ref={box4} onClick={(e) => { Togel(e, 3) }}></div>
               <div className="col" ref={box5} onClick={(e) => { Togel(e, 4) }}></div>
               <div className="col" ref={box6} onClick={(e) => { Togel(e, 5) }}></div>
            </div>
            <div className="row3">
               <div className="col" ref={box7} onClick={(e) => { Togel(e, 6) }}></div>
               <div className="col" ref={box8} onClick={(e) => { Togel(e, 7) }}></div>
               <div className="col" ref={box9} onClick={(e) => { Togel(e, 8) }}></div>
            </div>

         </div>
         <button className='Reaset' onClick={Reaset}>Reaset</button>
      </div>

   );
}

export default TicTactoe;