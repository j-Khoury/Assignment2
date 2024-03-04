import React from 'react'

export default function CategoryRow(props) {

    const {id, type} = props.category
    return (
      <tr>
          <td colSpan={2} id={id}>{type}</td>
      </tr>
     
     )
  
}
