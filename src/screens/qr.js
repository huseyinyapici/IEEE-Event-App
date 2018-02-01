import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode';


export default class QRScreen extends React.Component {


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
                        value={'lknasdkasdnknaskdjnasdjknkj'}
                        size={w / 1.25}
                        bgColor='black'
                        fgColor='#f4f4f4' />
                </View>
            </View>
        );
    }
}