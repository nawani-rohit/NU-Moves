import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByCategory } from '../redux/ads/adsSlice'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  const handleCategories = (category) => {
    setCategory(category)

    if (!category) {
      return
    }

    dispatch(filterByCategory(category))
  }

  return (
    <ul className="categories_navlinks">
      <li className="navlink" onClick={() => handleCategories('Mobile Phones')}>
        Appliances
      </li>
      <li className="navlink" onClick={() => handleCategories('Cars')}>
        Furniture
      </li>
      <li className="navlink" onClick={() => handleCategories('Motorcycles')}>
        Cooking Utensils
      </li>
      <li className="navlink" onClick={() => handleCategories('Houses')}>
        Cleaning Supplies
      </li>
      <li className="navlink" onClick={() => handleCategories('Tv')}>
        Electronic Equipments
      </li>
      <li className="navlink" onClick={() => handleCategories('Video-Audio')}>
        Crockery
      </li>
      <li className="navlink" onClick={() => handleCategories('Tablets')}>
        Furnishing
      </li>
      <li className="navlink" onClick={() => handleCategories('Laptops')}>
        Kitchenware
      </li>
      <li className="navlink" onClick={() => handleCategories('Land & Plots')}>
        Cleaning Equipments
      </li>
      <li className="navlink" onClick={() => handleCategories('Others')}>
        Others
      </li>
    </ul>
  )
}

export default Categories
