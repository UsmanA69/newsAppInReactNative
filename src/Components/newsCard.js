import React from 'react';
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsCard = props => {
  const handlePress = () => {
    const {url, title} = props.data;
    props.onPress({url, title});
  };
  const handleSavePress = async()=>{
    const {data} = props;
    try {
      const stringifyNewsData = JSON.stringify(data);
      await AsyncStorage.setItem('news', stringifyNewsData);
    } catch (e) {
      Alert.alert('Error', e);
      // saving error
    }
  }

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              props.data.urlToImage != null
                ? props.data.urlToImage
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
          }}
        />
      </Left>
      <Body>
        <Text>{props.data.title}</Text>
        <Text note numberOfLines={2}>
          {props.data.description}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <View>
            <Button transparent onPress={handlePress}>
              <Text>View</Text>
            </Button>
            <Button transparent onPress={handleSavePress}>
              <Text>Save</Text>
              <FontAwesome5
                name="save"
                color="lightblue"
                size={16}
              />
            </Button>
          </View>
        </Button>
      </Right>
    </ListItem>
  );
};

export default NewsCard;
