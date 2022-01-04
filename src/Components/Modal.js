import React from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import {Container, Header, Content, Body, Left, Right, Title, Button} from 'native-base';
import WebView from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ModalComponent = props => {
  const handleClose = () => {
    return props.onClose();
  };

  const handleShare = () => {
    const {url, title} = props.articleData;
    let message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  const {showModal, articleData} = props;
  const {url} = articleData;
  return (
    <>
      {url != undefined ? (
        <>
          <Modal
            animationType="slide"
            transparent
            visible={showModal}
            onRequestClose={handleClose}>
            <Container
              style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
              <Header style={{backgroundColor: '#009387'}}>
                <Left>
                  <Button onPress={handleClose} transparent>
                    <FontAwesome5 name="window-close" style={{color: 'white', fontSize: 12}} />
                  </Button>
                </Left>
                <Body>
                  <Title
                    children={articleData.title}
                    style={{color: 'white'}}
                  />
                </Body>
                <Right>
                  <Button onPress={handleShare} transparent>
                    <FontAwesome5 name="share" style={{color: 'white', fontSize: 12}} />
                  </Button>
                </Right>
              </Header>
              <Content contentContainerStyle={{height: "100%"}}>
                <WebView
                  source={{uri: url}}
                  style={{flex: 1}}
                  onError={handleClose}
                  startInLoadingState
                  scalesPageToFit
                />
              </Content>
            </Container>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default ModalComponent;
