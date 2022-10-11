import {View, VirtualizedList} from 'react-native';
import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {ProductListPageComponentType} from '../../../../types/common';

type CategoryDetailsProps = {
  id: string;
  title: string;
};

export interface SubCategoriesProps {
  subCategoryList: CategoryDetailsProps[];
}

const SubCategories = (props: SubCategoriesProps) => {
  return (
    <View style={{marginVertical: 5}} testID="subCategories">
      <VirtualizedList<CategoryDetailsProps>
        testID="subCategoryList"
        data={props.subCategoryList}
        initialNumToRender={4}
        horizontal={true}
        renderItem={({item}) => <ItemRenderer item={item} />}
        getItemCount={() => props.subCategoryList.length}
        keyExtractor={item => item.id}
        getItem={(res, index) => res[index]}
      />
    </View>
  );
};

const ItemRenderer = ({item}: {item: CategoryDetailsProps}) => {
  const theme = useTheme();
  return (
    <Button
      mode={item.id === '1' ? 'contained' : 'outlined'}
      style={{
        marginHorizontal: 5,
        marginVertical: 2,
        borderColor: theme.colors.greyTextColor,
        borderRadius: 2,
      }}
      labelStyle={{
        fontSize: 12,
        fontWeight: '400',
        color: item.id === '1' ? '#ffffff' : '#364A15',
      }}
      onPress={() => console.log('Pressed')}>
      {item.title}
    </Button>
  );
};

export default SubCategories;

export const SubCategoriesCMSInput = {
  _component: ProductListPageComponentType.SubCategories,
  component: SubCategories,
};
