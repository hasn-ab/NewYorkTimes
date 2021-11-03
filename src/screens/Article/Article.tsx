import React from 'react';
import ArticleUI from './ArticleUI';
import ArticleService from './ArticleService';

const Article = () => {
  return (
    <ArticleService>{(props: any) => <ArticleUI {...props} />}</ArticleService>
  );
};

export default Article;
