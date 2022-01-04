// import React, {useEffect, useState} from 'react';
// import {Alert, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

// const SavedNews = () => {
//   const [news, setNews] = useState([]);

//   const getTodosFromUserDevice = async () => {
//     try {
//       const savedNews = await AsyncStorage.getItem('news');
//       if (savedNews != null) {
//         setNews(JSON.parse([savedNews]));
//       }
//     } catch (error) {
//       Alert.alert('Error', error);
//     }
//   };


//   useEffect(() => {
//     getTodosFromUserDevice();
//   }, []);
//   return (
//     <>
//         {
//             news.map((elem)=>{
//                 <Text>Hello</Text>
//             })
//         }
//     </>
//   );
// };

// export default SavedNews;

// const styles = StyleSheet.create({});
