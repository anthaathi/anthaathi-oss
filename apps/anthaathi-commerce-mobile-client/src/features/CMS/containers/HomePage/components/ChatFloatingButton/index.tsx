import React, {useState} from 'react';
import {HomePageComponentType} from "../../../../types/common";
import {FAB, Portal} from "react-native-paper";
import ChatWootWidget from '@chatwoot/react-native-widget';
import {SafeAreaView, StyleSheet} from "react-native";

export interface ChatFloatingButtonProps {
    key: string
};

const ChatFloatingButton = (props: ChatFloatingButtonProps) => {
    const [showWidget, toggleWidget] = useState(false);
    const user = {
        identifier: 'john@gmail.com',
        name: 'John Samuel',
        avatar_url: '',
        email: 'john@gmail.com',
        identifier_hash: '',
    };
    const customAttributes = { accountId: 1, pricingPlan: 'paid', status: 'active' };
    const websiteToken = 'bsUQcgVTRZ7JGiuXZbeTCGGE';
    const baseUrl = 'https://app.chatwoot.com';
    const locale = 'en';

    return (
      <Portal>
          <FAB
              style={styles.fab}
              size="medium"
              icon="chat"
          />
          <SafeAreaView style={styles.container}    >
              <FAB
                  style={styles.fab}
                  size="medium"
                  icon="chat"
                  onPress={() => { toggleWidget(true) }}
              />
              {
                  showWidget&&
                  <ChatWootWidget
                      websiteToken={websiteToken}
                      locale={locale}
                      baseUrl={baseUrl}
                      closeModal={() => toggleWidget(false)}
                      isModalVisible={showWidget}
                      user={user}
                      customAttributes={customAttributes}
                  />
              }

          </SafeAreaView>
      </Portal>
    );
}

const styles = StyleSheet.create({
   fab: {
       position: "absolute",
       margin: 20,
       right: 0,
       bottom: 0
   },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ChatFloatingButton;

export const ChatFloatingButtonCMSInput = {
    _component: HomePageComponentType.ChatFloatingButton,
    component: ChatFloatingButton
}
