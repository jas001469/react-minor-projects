import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection]= useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId );
    }
    function handleMultiSelection(getCurrentId){
let cpyMultiple =[...multiple];
const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
console.log(findIndexOfCurrentId)
if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
    }

console.log(selected);
    return (
    <div className="wrapper">
<button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
    Enable Multi Selection</button>
<div className="accordian">
    {
        data && data.length > 0 ? 
        data.map(dataItem => <div className="item">
            <div onClick={enableMultiSelection
             ? ()=> handleMultiSelection(dataItem.id) 
             : ()=>handleSingleSelection(dataItem.id)} 
            className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
            </div>
            {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
        </div>)
        : <div>No Data Found!</div> 
    }
</div>
    </div>);
}