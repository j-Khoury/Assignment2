import React from 'react'
import CategoryRow from './CategoryRow.jsx'
import ProductRow from './productRow.jsx'

export default function ProductTable() {

    let categories  = [
        {id:1, type:'Fruits'},
        {id:2, type:'Vegatables'}
        ]
    let products  = [
        {type: "apple", price: 1, category_id: 1},
        {type: "banana", price: 1, category_id: 1},
        {type: "spinach", price: 1, category_id: 2},
        {type: "pumpkin", price: 2, category_id: 2},
        {type: "tomato", price: 2, category_id: 2},
    ]

  return (
    <div>
        <table>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            <tr>
            {categories.map(category => (
            <div key={category.id}>
              <CategoryRow category={category} />
              {products
                .filter(product => product.category_id === category.id)
                .map(product => (
                  <ProductRow key={product.type} product={product} />
                ))}
            </div>
          ))}

                {/* category
                product
                product
                product

                category
                product
                product
                product */}
            </tr>
        </table>
    </div>
  )
}
