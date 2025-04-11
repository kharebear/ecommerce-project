import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [suCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item=> item !== e.target.value));
    } 
    else 
    {
      setCategory(prev=> [...prev, e.target.value]);
    }
  }


  const toggleSubCategory = (e) => {

    if (suCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value));
    }
    else
    {
      setSubCategory(prev=> [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
      }

      if (suCategory.length > 0) {
        productsCopy = productsCopy.filter(item => suCategory.includes(item.subCategory));
      }

      setFilterProducts(productsCopy);
  }

  const sortProducts = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
        case 'low-to-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;

        case 'high-to-low':
          fpCopy.sort((a, b) => b.price - a.price);
          break;

        default:
          applyFilter();
          break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, suCategory, search, showSearch])


  useEffect(() => {
    sortProducts();
  }, [sortType])

  return ( 
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
        {/*Cateogory Filter */}
        <div className={`border border-gray-30- pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
               <input className='w-3' type="checkbox" value={'Figures'} onChange={toggleCategory} /> FIGURES
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-30- pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
               <input className='w-3' type="checkbox" value={'KAWS'} onChange={toggleSubCategory}/> KAWS
            </p>
            <p className='flex gap-2'>
               <input className='w-3' type="checkbox" value={'BE@RBRICKS'} onChange={toggleSubCategory}/> BE@RBRICKS
            </p>
          </div>
        </div>
      </div>

      {/* Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text sm:text-2xl mb-4'>
             <Title text1={'ALL'} text2={'COLLECTIONS'}/>
             {/*Product Sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort By: High to Low</option>
              </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/> 
              ))}
        </div>
      </div>
    </div>
  )
}
export default Collection
