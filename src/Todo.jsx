import React from "react";
import { useState } from "react";
import List from "./List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Todo = () => {
    const [inputList , setInputList] = useState("")
    const [items,setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const addItem = () => {
        setItems((oldItem)=>{
            return [...oldItem,inputList];
        })
        setInputList("")
    }

    const deleteItems = (id) => {
        setItems((oldItem)=> {
            return oldItem.filter((arrElem,index)=>{
                return index !== id
            })
        })
    }

    return (
        <>
        <div className="main_div">
            <div className="sub_div1">
                <h1>TODO App</h1>
                <br />
                <input type="text" value={inputList} placeholder="Add a task" onChange={itemEvent} />
                <button className="add_btn" onClick={addItem}>
                    <FontAwesomeIcon icon={faPlus} className="regular-icon"/>
                </button>

                <ol>
                    {items.map( (itemval,index) => {
                       return (
                        <List key={index} id={index} text={itemval} select={deleteItems} />
                       )
                    } )}
                </ol>
            </div>
        </div>
        </>
    )
}
