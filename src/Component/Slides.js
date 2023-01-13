import React ,{useState} from 'react';
import people from "../data";
import { FaChevronCircleLeft,FaChevronCircleRight ,FaQuoteRight} from 'react-icons/fa';

const Slides = () => {
  const [index,setIndex]= useState(0);
  
  const { name,image, title, quote}= people[index];
  const randomPeople=()=>{
    setIndex(()=> {
      let newIndex= Math.trunc(Math.random()*people.length);
      console.log(newIndex);
      return newIndex
    })
    
  }
  const nextPeople=()=>{
    setIndex(()=> {
if (index===people.length-1) {
  let newIndex = 0;
  console.log(newIndex);
  return newIndex;
}else {
  let newIndex = index +1;
  console.log(newIndex);
  return newIndex;
}

      })
    
        }
        const prevsPeople=()=>{
          setIndex(()=> {
            if (index===0) {
              let newIndex = people.length-1;
              console.log(newIndex);
              return newIndex;
            }else {
              let newIndex = index -1;
              console.log(newIndex);
              return newIndex;
            }

             })
          
              }
  return (
<article  className='review' >
<div className="img-container">
<span className="quote-icon"><FaQuoteRight/>
    </span>
    <img src={image} alt={name} className='person-img' />
    
</div>
<div className="author">{name}</div>
<h2 className="job">{title}</h2>
<h2 className="info">{quote}</h2>


  
     <div className="button-container">
  <button className="next-btn"onClick={nextPeople}>
  <FaChevronCircleRight/>
  </button>
  <button className="prev-btn"  onClick={prevsPeople}>
  <FaChevronCircleLeft/>
  </button>

</div>
<button className="random-btn"onClick={randomPeople} type= "button" >  Random user </button>
</article>

  )
}

export default Slides

