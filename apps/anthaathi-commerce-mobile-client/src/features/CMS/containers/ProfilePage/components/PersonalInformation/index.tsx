import {Text, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';
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
  const intl = useIntl();

  return (
    <Card
      style={{
        marginHorizontal: 10,
        borderColor: '#E3E2E7',
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
          <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
            {props.title}
          </Text>
          <Button
            testID="editPersonalInfo"
            mode="text"
            labelStyle={{color: '#008D3E'}}
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
  return (
    <View
      testID="infoTextComponentId"
      style={{
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      <Text style={{color: '#808080', fontSize: 14, fontWeight: '400'}}>
        {label + ':  '}
      </Text>
      <Text style={{color: '#364A15', fontSize: 14, fontWeight: '600'}}>
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
