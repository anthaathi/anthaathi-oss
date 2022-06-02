import React from 'react';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useIntl} from 'react-intl';

const App = () => {
  const intl = useIntl();

  return (
    <View style={{height: '100%'}}>
      <Button onPress={() => console.log('test')}>Hello world</Button>
      <Card style={{margin: 12}}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>{intl.formatMessage({defaultMessage: 'Ajax'})}</Title>
          <Paragraph>
            {intl.formatMessage({defaultMessage: 'Firebase'})}
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button onPress={() => {}}>Cancel</Button>
          <Button onPress={() => {}}>Ok</Button>
        </Card.Actions>
      </Card>

      <TextInput
        style={{marginTop: 15}}
        label="Outlined input"
        mode="outlined"
      />

      <Appbar style={styles.bottomBar}>
        <Appbar.Action
          icon="home"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action
          icon="share"
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log('Pressed label')}
        />
        <Appbar.Action
          icon="web-cancel"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
