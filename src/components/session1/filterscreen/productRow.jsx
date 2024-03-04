import React from 'react'

export default function ProductRow(props) {

  const {type, price} = props.product

  return (
    <>
    <tr>
        <td>{type}</td>
        <td>{price}$</td>
    </tr>
    
    </>
  )
}
