import React from 'react';
import NewArrivals from '../components/homePage/NewArrivals';
import TopSelling from '../components/homePage/TopSelling';
import BrowseDress from '../components/homePage/BrowseDress';
import HomePageHeader from '../components/homePage/HeaderHomePage';
import Comments from '../components/homePage/Comments';

const HomePage = () => {
  return <div>
  <HomePageHeader/>
  <NewArrivals/>
  <TopSelling/>
  <BrowseDress/>
  <Comments/>
  </div>;
};

export default HomePage;
