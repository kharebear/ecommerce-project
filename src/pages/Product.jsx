import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    
    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    }) 
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------Product Data----------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* ---------Product Images----------- */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item, index) => (
              <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="" />
        </div>
      </div>

        {/* -----------Product Info------------ */}
        <div className='flex-1'> 
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star} alt="" className="w- 3 5" />
              <img src={assets.star} alt="" className="w- 3 5" />
              <img src={assets.star} alt="" className="w- 3 5" />
              <img src={assets.star} alt="" className="w- 3 5" />
              <p className='p1-2'>(465)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
          </div>
          <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm"w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Hand-Crafted and Authentic</p>
            <p>All Payment are Secure</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      
    {/* --------Description & Reviews----------- */}
    <div className='mt-20'>
      <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (465)</p>
      </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Elevate your collection with this exclusive KAWS Companion Figure, a striking blend of street culture and contemporary art. Crafted with precision, this figure features KAWS' signature crossed-out eyes and expressive body language, making it instantly recognizable to fans and collectors alike. The matte finish and carefully sculpted details highlight the character’s emotional depth and minimalist aesthetic.</p>
          <p>Whether displayed on a shelf or showcased in a gallery, it adds a bold, urban edge to any space. Limited in quantity and highly sought after, this piece is a must-have for serious collectors. Own a piece of pop art history that bridges the gap between toy culture and high art.</p>
        </div>
    </div>

      {/* --------Display Related Products----------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}
export default Product
