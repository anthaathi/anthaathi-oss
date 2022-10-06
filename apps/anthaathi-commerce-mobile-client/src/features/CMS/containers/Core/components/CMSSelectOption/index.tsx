import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Divider, List, useTheme} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import CMSBottomSheet from '../CMSBottomSheet';
import {useIntl} from 'react-intl';

export type OptionDataProps = {
  id: number;
  key?: string;
  title: string;
  subtitle?: string;
  leftIconName?: string;
};

export interface CMSSelectOptionProps {
  title: string;
  options: [];
  optionOnPress?: (data: OptionDataProps) => void;
}

const CMSSelectOption = ({
  title,
  options,
  optionOnPress,
}: CMSSelectOptionProps) => {
  const theme = useTheme();
  const intl = useIntl();
  const [selectedOption, setSelectedOption] = useState(0);
  const [isVisible, setVisible] = React.useState(false);

  return (
    <View style={{marginHorizontal: 10}} testID="cmsSelectOption">
      <Text
        style={{
          color: theme.colors.titleTextColor,
          fontSize: 16,
          fontWeight: '600',
        }}>
        {title}
      </Text>
      <View style={{marginVertical: 5}}>
        <ListItemData
          title={options[selectedOption]['title']}
          subtitle={options[selectedOption]['subtitle']}
          leftIconName={options[selectedOption]['leftIconName']}
          rightIconName={'chevron-right'}
          onPress={() => {
            setVisible(!isVisible);
          }}
        />
      </View>
      <CMSBottomSheet
        bottomSheetTitle={intl.formatMessage({
          defaultMessage: 'Choose delivery location',
        })}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: 'white',
          maxHeight: '40%',
          minHeight: '15%',
        }}
        bottomSheetTitleStyle={{color: theme.colors.titleTextColor}}
        setBottomSheetVisible={setVisible}
        bottomSheetVisible={isVisible}>
        <ScrollView>
          {options &&
            options.map((data: OptionDataProps, index: number) => (
              <ListItemData
                key={index}
                title={data.title}
                subtitle={data.subtitle}
                onPress={() => {
                  optionOnPress && optionOnPress(data);
                  setSelectedOption(index);
                  setVisible(!isVisible);
                }}
                leftIconName={data.leftIconName}
                rightIconName={index === selectedOption ? 'check' : undefined}
                divider
              />
            ))}
        </ScrollView>
      </CMSBottomSheet>
    </View>
  );
};

const ListItemData = ({
  title,
  subtitle,
  leftIconName,
  rightIconName,
  onPress,
  divider = false,
}: {
  title: string;
  subtitle?: string;
  leftIconName?: string;
  rightIconName?: string;
  onPress?: () => void;
  divider?: boolean;
}) => {
  return (
    <>
      <List.Item
        onPress={onPress}
        style={{paddingVertical: subtitle ? 2 : 3, backgroundColor: '#fff'}}
        title={title}
        description={subtitle}
        left={props => {
          return (
            leftIconName && (
              <List.Icon
                {...props}
                icon={leftIconName}
                style={{marginLeft: 0, marginRight: 5}}
              />
            )
          );
        }}
        right={props => {
          return rightIconName && <List.Icon {...props} icon={rightIconName} />;
        }}
      />
      {divider && <Divider />}
    </>
  );
};

export default CMSSelectOption;

export const SelectOptionCMSInput = {
  _component: CoreComponentType.CMSSelectOption,
  component: CMSSelectOption,
};
