import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

require('dotenv').config();

const server = setupServer(
  rest.get(
    `https://fauxnewsapi.com/v1/search`,
    (req, res, ctx) => {
      const query = req.url.searchParams
      const q = query.get('ghosts')
      return res(
        ctx.json([
          {
            title: 'Ghosts, are they you?',
            author: 'Mr. Boo',
            description: 'A study on past, present, and future ghosts',
            url: 'www.ghost.com',
            source: 'The Washington Ghost'
          }
        ])
      )
    })
)

describe('NewsSearch container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders App', async () => {
    render(<NewsSearch />);

    screen.getByLabelText('loading')

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('article search');
    userEvent.type(input, 'ghosts');
    expect(input).toMatchSnapshot();

    const submitButton = await screen.findByRole('button', { name: 'search-articles' })
    userEvent.click(submitButton);
    expect(submitButton).toMatchSnapshot();

    const article = await screen.findAllByRole('listitem', { name: 'article' })
    expect(article).toMatchSnapshot();
  });
});
