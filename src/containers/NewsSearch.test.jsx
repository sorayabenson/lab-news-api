import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
  afterEach(() => cleanup());

  it('renders App', async () => {
    render(<NewsSearch />);

    screen.getByLabelText('loading')

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
