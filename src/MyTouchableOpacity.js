/**
 * guohaoxu 2016-05-30
 */
'use strict';
import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	StatusBar,
	View,
	TextInput
} from 'react-native';

import MyTouchableOpacity2 from './MyTouchableOpacity2';

export default class MyTouchableOpacity extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	_PressHandler() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'Scene2',
				component: MyTouchableOpacity2
			})
		}
	}
	render() {
		return (
			<View>
			<TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			/>
			<TouchableOpacity style={styles.touchable} onPress={this._PressHandler.bind(this)}>
				<Text style={styles.touchTxt}>确定</Text>
			</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	touchable: {
		width: 150,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#c33',
		justifyContent: 'center',
		overflow: 'hidden',
		marginTop: 30
	},
	touchTxt: {
		textAlign: 'center',
		color: '#fff'
	}
});