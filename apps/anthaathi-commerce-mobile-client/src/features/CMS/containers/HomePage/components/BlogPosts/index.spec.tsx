import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import BlogPosts from './index';

describe('BlogPosts', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BlogPosts
            title="From the journal"
            mainBlog={{
              id: 1,
              title: 'blog title',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
              published_date: 'May 26, 2022',
              author: 'author name',
            }}
            blogs={[
              {
                id: 2,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
              {
                id: 3,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('blogPosts')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BlogPosts
            title="From the journal"
            handlePress={onpress}
            mainBlog={{
              id: 1,
              title: 'blog title',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
              published_date: 'May 26, 2022',
              author: 'author name',
            }}
            blogs={[
              {
                id: 2,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    fireEvent.press(temp.queryByTestId('handlePressBlogs')!);
    expect(onpress).toBeCalledTimes(1);
  });

  it('should have BlogPosts title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BlogPosts
            title="From the journal"
            mainBlog={{
              id: 1,
              title: 'blog title',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
              published_date: 'May 26, 2022',
              author: 'author name',
            }}
            blogs={[
              {
                id: 2,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('From the journal')).toBeTruthy();
  });

  it('should have BlogPosts Main blog Image', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BlogPosts
            title="From the journal"
            mainBlog={{
              id: 1,
              title: 'blog title',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
              published_date: 'May 26, 2022',
              author: 'author name',
            }}
            blogs={[
              {
                id: 2,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('mainBlogImage')!.props.source).toMatchObject({
      uri: 'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
    });
  });

  it('should have BlogPosts title, published_date', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BlogPosts
            title="From the journal"
            mainBlog={{
              id: 1,
              title: 'main blog title',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_360x.jpg',
              published_date: 'May 26, 2022',
              author: 'author name',
            }}
            blogs={[
              {
                id: 2,
                title: 'blog title',
                image:
                  'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_520x500.jpg',
                published_date: 'May 26, 2022',
                author: 'author name',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByTestId('mainBlogTitle')?.children).toContain(
      'main blog title',
    );
    expect(temp.queryByTestId('mainBlogDate')?.children).toContain(
      'May 26, 2022',
    );
  });
});
