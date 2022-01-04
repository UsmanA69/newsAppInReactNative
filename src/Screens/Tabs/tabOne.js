import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, Modal, ScrollView, View} from 'react-native';
import {getArticles} from '../../service/news';
import NewsCard from '../../Components/newsCard';
import {Container, Content, List} from 'native-base';
import ModalComponent from '../../Components/Modal';

const TabOne = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  const handleModalClose = () => {
    setModalVisible(false);
    setModalArticleData({});
  };

  let Contentview = () => {
    return isLoading ? (
      <>
        <View>
          <ActivityIndicator animating={isLoading} />
        </View>
      </>
    ) : (
      <>
        <List
          dataArray={data}
          renderRow={item => {
            return (
              <NewsCard
                onPress={articleData => {
                  setModalVisible(true);
                  setModalArticleData(articleData);
                }}
                data={item}
              />
            );
          }}
        />
      </>
    );
  };

  useEffect(() => {
    getArticles("general").then(
      data => {
        setIsLoading(false);
        setData(data);
      },
      error => {
        Alert.alert('Error', error);
      },
    );
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Contentview />
        </Content>
        <ModalComponent
          showModal={modalVisible}
          articleData={modalArticleData}
          onClose={handleModalClose}
        />
      </Container>
    </>
  );
};

export default TabOne;
