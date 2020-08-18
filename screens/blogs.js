import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, FlatList, List, ListItem, Console, SafeAreaView } from 'react-native';
import styles from '.././style'

class Blogs extends React.Component {

    constructor() {
        super();
        this.state = {
            entries: [],
        };
    }

    componentDidMount() {
        fetch('https://kethan.herokuapp.com/api_blogs')
            .then(response => response.json())
            .then(jsonResponse => this.setState({ entries: jsonResponse }));
    }

    render() {
        return (
            <View style={[ styles.container, styles.border ]}>
                <FlatList
                    data={this.state.entries}
                    renderItem={({item}) => <Text>{item.link}</Text>}
                    keyExtractor={item => item.link}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }
}

export default Blogs;