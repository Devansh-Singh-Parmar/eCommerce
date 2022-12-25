import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const Product = ({ product: {image, name, slug,price,size1,size2,size3,size4,size5,size6,size7}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} 
          width={200}
          height={200} 
          className="product-image"
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>₹{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product