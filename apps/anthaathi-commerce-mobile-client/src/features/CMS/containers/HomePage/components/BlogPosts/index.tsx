import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {Divider, Text, TouchableRipple} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {useResponsiveValue} from '../../../../utils/useResponsiveValue';
import {useDimension} from '../../../../utils/useDimension';
import {HomePageComponentType} from '../../../../types/common';

type BlogsProps = {
  id: number;
  title: string;
  image: string;
  published_date: string;
  author: string;
};

export interface BlogPostProps {
  title: string;
  handlePress?: () => void;
  blogs: BlogsProps[];
  mainBlog: BlogsProps;
}

const BlogPosts = (props: BlogPostProps) => {
  const intl = useIntl();
  const itemHeight = useResponsiveValue([120, 120, 180, 240]);
  const itemMainHeight = useResponsiveValue([240, 320, 420, 480]);
  const [getWidth] = useDimension();

  return (
    <View style={{marginHorizontal: 10}} testID="blogPosts">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text variant="titleLarge" style={{marginBottom: 9, fontSize: 20}}>
          {props.title}
        </Text>

        <Pressable onPress={props.handlePress} testID="handlePressBlogs">
          <Text
            variant="titleMedium"
            style={{
              marginBottom: 9,
              textDecorationLine: 'underline',
              fontSize: 14,
            }}>
            {intl.formatMessage({defaultMessage: 'View All'})}
          </Text>
        </Pressable>
      </View>

      <View style={{flexDirection: getWidth < 800 ? 'column' : 'row'}}>
        <View style={{width: getWidth < 800 ? '100%' : '40%'}}>
          <MainBlog blog={props.mainBlog} itemHeight={itemMainHeight} />
        </View>
        <Divider style={{marginVertical: 5}} />
        <View
          style={{
            width: getWidth < 800 ? '100%' : '58%',
            marginHorizontal: getWidth < 800 ? 0 : 10,
          }}>
          {props.blogs.map(blog => {
            return (
              <BlogRenderer key={blog.id} blog={blog} itemHeight={itemHeight} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const MainBlog = ({
  blog,
  itemHeight,
}: {
  blog: BlogsProps;
  itemHeight: number;
}) => {
  return (
    <TouchableRipple onPress={() => {}}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Image
          testID="mainBlogImage"
          source={{uri: blog.image}}
          style={{height: itemHeight, width: '100%'}}
        />
        <Text
          testID="mainBlogTitle"
          style={{
            fontSize: 16,
            fontWeight: '700',
            width: '70%',
            textAlign: 'center',
          }}>
          {blog.title}
        </Text>
        <Text testID="mainBlogDate" style={{fontSize: 14, fontWeight: '400'}}>
          {blog.published_date}
        </Text>
      </View>
    </TouchableRipple>
  );
};

const BlogRenderer = ({
  blog,
  itemHeight,
}: {
  blog: BlogsProps;
  itemHeight: number;
}) => {
  return (
    <TouchableRipple onPress={() => {}}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Image
          source={{uri: blog.image}}
          style={{height: itemHeight, width: '40%'}}
        />
        <View style={{marginHorizontal: '2%', width: '56%'}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>{blog.title}</Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            {blog.published_date}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default BlogPosts;

export const BlogPostsCMSInput = {
  _component: HomePageComponentType.BlogPosts,
  component: BlogPosts,
};
