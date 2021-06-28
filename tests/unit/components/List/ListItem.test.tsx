import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-extended';

import { ListItem, ListItemProps } from '@/components/List/ListItem';

test('Sample test', () => {
  expect(true).toBeTruthy();
});

describe('<ListItem />', () => {
  it('renders the ListItem component', () => {
    const props: ListItemProps = {
      key: 1,
      recipe: {
        id: 10,
        image: 'test',
        alt: 'test',
        category: 'technology',
        title: 'Hello',
        description: 'New item',
      },
    };

    const component = render(<ListItem {...props} />);

    expect(component).toBeTruthy();
  });
});
