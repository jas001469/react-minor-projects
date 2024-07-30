import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';

export default function StarRating({noOFStars=5}){

const [rating,setRating]=useState(0);
const [hover,setHover]= useState(0);

function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
}
function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
}
function handleMouseLeave(getCurrentIndex){
    setHover(rating);
}


    return <div className="star-rating">{
        [...Array(noOFStars)].map((_,index)=>{
            index +=1;
            
            return(<FaStar
            
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            
            />);;
        })
    }


    </div>
}