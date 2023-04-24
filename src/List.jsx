import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const List = (props) => {
    return(
        <>
        <div className="lists_style ">
            <button className="rem_btn" onClick={() => {
                props.select(props.id)
            }}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <li className="itemm">{props.text}</li>
        </div>
        </>
    )
}

export default List;
