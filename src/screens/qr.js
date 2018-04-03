import React from 'react';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';
import * as utils from '../utils';

export default class QRScreen extends React.Component {

    constructor(props) {
        super(props);



        this.fetch = this.fetch.bind(this);
    }

    state = {
        data: '',
    }

    componentWillMount() {
        this.fetch();
    }



    async fetch() {
        try {
            const res = await AsyncStorage.getItem(utils.KEY_USER);
            if (res !== null) {
                this.setState({ data: res });
            }

        } catch (error) {
            console.error('QRScreen : fetch ', error);
        }
    }



    render() {
        const w = Dimensions.get('screen').width;
        const h = Dimensions.get('screen').height;

        return (
            <View style={{ flex: 1, backgroundColor: '#f4f4f4' }} >
                <View style={{ height: h / 8.33, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: w / 10.41 }} > Kimlik </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
                    <QRCode
                        value={this.state.data}
                        size={w / 1.25}
                        bgColor='black'
                        fgColor='#f4f4f4' />
                </View>
            </View>
        );
    }
}