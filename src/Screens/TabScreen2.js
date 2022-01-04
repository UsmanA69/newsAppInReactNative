import React from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import TabOne from './Tabs/tabOne';
import TabTwo from './Tabs/tabTwo';
import TabThree from './Tabs/tabThree';

export default function TabScreen2() {
  return (
    <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="General">
          <TabOne />
        </Tab>
        <Tab heading="Music">
          <TabTwo />
        </Tab>
        <Tab heading="Technology">
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
}
