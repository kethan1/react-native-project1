import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import styles from '.././style'

function Home() {
    return (
      <View style={[ styles.container ]}>
        <Text>Home!</Text>
      </View>
    );
}

export default Home;