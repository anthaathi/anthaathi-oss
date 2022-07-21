import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {useDimension} from '../../../../utils/useDimension';
import {HomePageComponentType} from '../../../../types/common';

export interface ColumnProps {
  title: string;
  description?: string;
  image: string;
}

export interface TextWithImageProps {
  title: string;
  columns: ColumnProps[];
}

const TextWithImage = (props: TextWithImageProps) => {
  const [width] = useDimension();

  return (
    <View style={{alignItems: 'center'}} testID="textWithImage">
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontSize: 22,
          fontWeight: '100',
          marginVertical: 10,
        }}
        variant="titleSmall">
        {props.title}
      </Text>
      <View
        style={{
          flexDirection: width < 600 ? 'column' : 'row',
          flexWrap: width < 600 ? 'nowrap' : 'wrap',
        }}>
        {props.columns.map((data, index) => (
          <View key={index}>
            <ColumnCard data={data} />
          </View>
        ))}
      </View>
    </View>
  );
};

const ColumnCard = ({data}: {data: ColumnProps}) => {
  return (
    <View style={{alignItems: 'center', marginVertical: 10}}>
      <View
        style={{
          height: 240,
          width: 240,
          marginHorizontal: 5,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontSize: 18,
          fontWeight: '100',
          marginVertical: 5,
        }}
        variant="titleSmall">
        {data.title}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontSize: 16,
          fontWeight: '100',
          marginBottom: 10,
        }}
        variant="titleSmall">
        {data.description}
      </Text>
    </View>
  );
};

export default TextWithImage;

export const TextWithImageCMSInput = {
  _component: HomePageComponentType.TextWithImage,
  component: TextWithImage,
};
