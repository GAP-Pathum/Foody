import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Discover an extensive and diverse menu crafted to offer something delightful for every taste, from classic favorites to unique creations.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div className='explore-menu-list-item' key={index}>
              <img src={item.menu_image} alt={item.name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu