import React from 'react'
import './App.css'


function List(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return  <div className="list-item" key="item.key">
            {item.text}<i className="fa fa-trash"></i>
            </div>
    })
    return (
    <div>{listItems}</div>
    )
}


export default List;