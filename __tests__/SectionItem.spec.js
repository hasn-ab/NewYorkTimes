import React from 'react';
import {render} from '@testing-library/react-native';
import SectionItem from '@screens/Home/components/SectionItem/index';

describe('SectionItem', () => {
  it('renders the name correctly', () => {
    const props = {
      name: 'section test name',
      active: true,
    };
    const {queryByText} = render(<SectionItem {...props} />);

    expect(queryByText('section test name')).not.toBeNull();
  });
});
