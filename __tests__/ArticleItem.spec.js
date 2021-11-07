import React from 'react';
import {render} from '@testing-library/react-native';
import ArticleItem from '@screens/Home/components/ArticleItem';

describe('ArticleItem', () => {
  it('renders the title and date correctly', () => {
    const item = {
      published_date: '2021-11-06T10:19:10-04:00',
      title: 'test title',
    };
    const {queryByText} = render(<ArticleItem item={item} />);

    expect(queryByText('test title')).not.toBeNull();
    expect(queryByText('Published: yesterday')).not.toBeNull();
  });
});
