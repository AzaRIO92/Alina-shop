import React from "react";
import './CategoryFilter.css'
import filtArrowIcon from "../../assets/photo_2023-11-03_09-50-34.jpg";
import frame from "../../assets/photo_2023-11-03_09-50-14.jpg";

const CategoryFilter = () => {
  return (
    <div className="category_block__filter">
      <div className="filter_block__title_block">
        <h1 className="filter_title">Filters</h1>
        <img className="filter_block__icon_frame" src={frame} alt="" />
      </div>

      <div className="filter_block__line"></div>
      <div className="filter_list_block">
        <ul className="filter_list">
          <li className="filter_list_item">T-Shirts</li>
          <li className="filter_list_item">Shorts</li>
          <li className="filter_list_item">Shirts</li>
          <li className="filter_list_item">Hoodie</li>
          <li className="filter_list_item">Jeans</li>
        </ul>
        <ul className="filter_list_icon">
          <li className="filter_list_icon">
            <img src={filtArrowIcon} alt="" />
          </li>
          <li className="filter_list_icon">
            <img src={filtArrowIcon} alt="" />
          </li>
          <li className="filter_list_icon">
            <img src={filtArrowIcon} alt="" />
          </li>
          <li className="filter_list_icon">
            <img src={filtArrowIcon} alt="" />
          </li>
          <li className="filter_list_icon">
            <img src={filtArrowIcon} alt="" />
          </li>
        </ul>
      </div>
      <div className="filter_block__line"></div>
      <button className="filter_block__btn">Apply Filter</button>
    </div>
  );
};

export default CategoryFilter;