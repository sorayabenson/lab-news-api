import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

require('dotenv').config();

describe('NewsSearch container', () => {

  it('renders App', async () => {
    render(<NewsSearch />);

    screen.getByLabelText('loading')

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('article search');
    userEvent.type(input, 'Yikes');
    expect(input).toMatchSnapshot();

    const submitButton = await screen.findByRole('button', { name: 'search-articles' })
    userEvent.click(submitButton);
    expect(submitButton).toMatchSnapshot();

    const article = await screen.findAllByRole('listitem', { name: 'article' })
    expect(article).toMatchSnapshot();
  });
});
