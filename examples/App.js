/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Container from 'react-native-container';

const Section = props => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{props.title}</Text>
      </View>
      <View style={styles.sectionBody}>{props.component()}</View>
    </View>
  );
};

const App: () => React$Node = () => {
  const Containers = new Array(1000);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <Section
          title="Center"
          component={() => (
            <Container center>
              <View style={styles.square} />
            </Container>
          )}
        />
        <Section
          title="Center vertical"
          component={() => (
            <Container center="vertical">
              <View style={styles.square} />
            </Container>
          )}
        />
        <Section
          title="Center horizontal"
          component={() => (
            <Container center="horizontal">
              <View style={styles.square} />
            </Container>
          )}
        />
        <Section
          title="Layout row with size"
          component={() => (
            <Container row>
              <Container size={2} style={{backgroundColor: 'indianred'}} />
              <Container size={3} style={{backgroundColor: 'steelblue'}} />
            </Container>
          )}
        />
        <Section
          title="Layout col with size"
          component={() => (
            <Container col>
              <Container size={5} style={{backgroundColor: 'indianred'}} />
              <Container size={3} style={{backgroundColor: 'steelblue'}} />
            </Container>
          )}
        />
        <Section
          title="Nested layout"
          component={() => (
            <Container>
              <Container style={{backgroundColor: 'indianred'}} />
              <Container row size={2}>
                <Container style={{backgroundColor: 'steelblue'}} />
                <Container size={3} style={{backgroundColor: 'lightgreen'}} />
              </Container>
            </Container>
          )}
        />
        <Section
          title="Absolute"
          component={() => (
            <Container>
              <Container style={{backgroundColor: 'steelblue'}} />
              <Container style={styles.square} absolute />
            </Container>
          )}
        />
        <Section
          title="Spacing"
          component={() => (
            <Container padding={5}>
              <Container margin={10} style={{backgroundColor: 'steelblue'}} />
              <Container
                marginHorizontal={30}
                style={{backgroundColor: 'indianred'}}
              />
            </Container>
          )}
        />
        {Containers.map((c, index) => {
          console.log(index);
          return <Container key={index} style={styles.square} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  sectionHeader: {
    height: 48,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 21,
  },
  section: {
    width: '100%',
  },
  sectionBody: {
    borderWidth: 0.5,
    borderColor: 'lightgray',
    height: 60,
  },
  square: {
    backgroundColor: 'indianred',
    width: 30,
    height: 30,
  },
});

export default App;
