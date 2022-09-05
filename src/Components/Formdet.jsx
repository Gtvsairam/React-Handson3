import React, { useState } from "react";
import './Formdet.css';
function Form() {
    const [updateName, setName]=useState();
    const [updateCompany, setCompany]=useState();
    const [updateRatings, setRatings]=useState();
    const [newState,setitem]=useState([]);
    const [showInfo, setInfo]=useState(false)

    const getName=(e)=>{
        setName(e.target.value);


    }
    const getCompany=(e)=>{
        setCompany(e.target.value);


    }
    const getRatings=(e)=>{
        setRatings(e.target.value);


    }
    const sumitForm=(e)=>{
        e.preventDefault();
        setitem((previtems)=>{
            return [...previtems,["Name : ",updateName, " | " , "Department : " ,updateCompany, " | ","Rating : ",updateRatings]]

        })
        setName("");
        setCompany("");
        setRatings("");
        setInfo(true);
        

    }
 
    return (
        <>
        {showInfo? null :
      <div className="box_form">
        <p className="header">EMPLOYEE FEEDBACK FORM</p>
        <form onSubmit={sumitForm} >
            <label className="name">NAME: </label>
            <input className="inpt1" type="text"  value={updateName} onChange={getName}  required/> <br/>
            <label className="department">DEPARTMENT: </label>
            <input className="inpt2" type="text"  value={updateCompany} onChange={getCompany} required/> <br/>
            <label className="ratings">RATING: </label>
            <input className="inpt3" type="number" value={updateRatings} onChange={getRatings} required/> <br/>
            <button className="class_btn" type="submit">Submit</button>
        </form>
        
      </div>}
   
       {(showInfo? <> 
        <p className="header">EMPLOYEE FEEDBACK DATA</p>
        <div className="show_boxdata">
            {

            newState.map((showval)=>{
                
                return <div className="flex_box">{showval}</div>
            })
            }
      </div>
       
      
      <button className="button" onClick={()=>{setInfo(!setInfo)}}>Back</button></> : null )
       }
    </>
    )
 }

      
    
    export default Form;