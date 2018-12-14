import React, { Component } from 'react'
import {View, Text, ListView, ActivityIndicator } from 'react-native'
import { Container, Header, Content, Footer, Left, Body, Right, Title, Icon, Card, CardItem, Thumbnail, Button } from 'native-base'

import PostApi from './PostApi'

export default class LeadBoards extends Component {

	render() {

		return(
			<Container>
				<Header style={{backgroundColor: '#3498db'}}>
					<Left>
						<Icon name="ios-arrow-back" style={{color: '#fff'}} onPress={()=> this.props.navigation.goBack()} />
					</Left>
					<Body>
						<Title>LeaderBoard</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Card>
						<CardItem style={{backgroundColor: '#e67e22'}}>
							<Body><Text style={{color: '#fff'}}>Top Leader Boards</Text></Body>
						</CardItem>
					</Card>
					<PostApi />
				</Content>
			</Container>
		);
	}
}