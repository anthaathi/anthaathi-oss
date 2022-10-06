import {Text, View} from 'react-native';
import React from 'react';
import {Button, Card, useTheme} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {ProfilePageComponentType} from '../../../../types/common';

type PersonalInfo = {
  name: string;
  email: string;
  mobile: string;
  alternateMobile: string;
};

export interface PersonalInformationProps {
  title: string;
  handlePress?: () => void;
  personalInfo: PersonalInfo;
}

const PersonalInformation = (props: PersonalInformationProps) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: theme.colors.cardBorderColor,
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 5,
      }}
      testID="personalInformation">
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.colors.titleTextColor,
              fontSize: 16,
              fontWeight: '600',
            }}>
            {props.title}
          </Text>
          <Button
            testID="editPersonalInfo"
            mode="text"
            labelStyle={{color: theme.colors.greenTextColor}}
            onPress={props.handlePress}>
            Edit
          </Button>
        </View>
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Name'})}
          name={props.personalInfo.name}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Email'})}
          name={props.personalInfo.email}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Mobile'})}
          name={props.personalInfo.mobile}
        />
        <InformationRenderer
          label={intl.formatMessage({defaultMessage: 'Alternate Mobile'})}
          name={props.personalInfo.alternateMobile}
        />
      </Card.Content>
    </Card>
  );
};

const InformationRenderer = ({label, name}: {label: string; name: string}) => {
  const theme = useTheme();
  return (
    <View
      testID="infoTextComponentId"
      style={{
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <Text
        style={{
          color: theme.colors.greyTextColor,
          fontSize: 14,
          fontWeight: '400',
        }}>
        {label + ':  '}
      </Text>
      <Text
        style={{
          color: theme.colors.titleTextColor,
          fontSize: 14,
          fontWeight: '600',
        }}>
        {name}
      </Text>
    </View>
  );
};

export default PersonalInformation;

export const PersonalInformationCMSInput = {
  _component: ProfilePageComponentType.PersonalInformation,
  component: PersonalInformation,
};
