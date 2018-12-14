import React, {Component} from 'react'
import {View, Text, ActivityIndicator, ListView} from 'react-native'
import {List, ListItem, Left, Right} from 'native-base'

export default class PostApi extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			clonedMovies: []
		}
	}

	componentDidMount() {
		fetch("http://10.0.2.2:3000/api/v1/users")
			.then((response)=> response.json())
			.then((responseJson)=> {
				var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2 });
				this.setState({
					isLoading: false,
					clonedMovies: standardDataSource.cloneWithRows(responseJson.values)
				});
			})
	}

	render() {
		if(this.state.isLoading) {
			return(
				<View>
					<ActivityIndicator />
				</View>
			);
		}
		return(
			<View style={{flex: 1, paddingTop: 25}}>
				<List>
					<ListView
						dataSource={this.state.clonedMovies}
						renderRow={
							(rowData)=> <ListItem>
											<Left><Text>{rowData.first_name}</Text></Left>
											<Right><Text note>{rowData.score}</Text></Right>
										</ListItem>
						}
					></ListView>
				</List>
			</View>
		);
	}
}