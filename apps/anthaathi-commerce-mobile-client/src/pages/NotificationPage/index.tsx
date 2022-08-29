import {View} from 'react-native';
import React from 'react';
import dataJson from '../../config/data.json';
import {CoreComponentType} from '../../features/CMS/types/common';

import CMSRenderer from '../../features/CMS';

const NotificationPage = props => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: dataJson.core.profilePage.header.title,
            leftIcon: dataJson.core.profilePage.header.leftIcon,
            leftOnPress: () => {
              props.navigation.goBack();
            },
          },
          {
            _component: CoreComponentType.Notification,
            key: '11',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
          },
          {
            _component: CoreComponentType.Notification,
            key: '12',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
          },
          {
            _component: CoreComponentType.Notification,
            key: '231',
            title: 'title',
            subtitle1: 'subtitle1',
            subtitle2: 'subtitle2',
            time: '1d',
          },
        ]}
      />
    </View>
  );
};

export default NotificationPage;
