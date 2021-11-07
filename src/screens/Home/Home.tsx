import React from 'react';
import HomeUI from './HomeUI';
import HomeService from './HomeService';

const Home = () => {
  return <HomeService>{(props: any) => <HomeUI {...props} />}</HomeService>;
};

export default Home;
