import React from 'react';
import {useRoute} from '@react-navigation/core';
import {ArticleScreenRouteProp} from 'src/navigation/types';

const ArticleService = ({children}: any) => {
  //get route with type checks
  const route = useRoute<ArticleScreenRouteProp>();
  return children({
    url: route.params.url,
  });
};

export default ArticleService;
