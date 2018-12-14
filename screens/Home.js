import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Card, CardItem, Fab } from 'native-base'
import SoundPlayer from 'react-native-sound-player';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalScore: 0,
            bgColor: [
              '#1abc9c',
              '#16a085',
              '#f1c40f',
              '#f39c12',
              '#2ecc71',
              '#27ae60',
              '#2980b9',
              '#e67e22',
              '#d35400',
              '#e74c3c',
              '#c0392b',
              '#9b59b6',
              '#8e44ad',
              '#34495e',
              '#2c3e50',
              '#95a5a6',
              '#7f8c8d',
              '#ecf0f1',
              '#bdc3c7',
            ],
            selectedColor: '',
        }
    }

    componentDidMount() {
        this._getRandomColor()
    }

    _getRandomColor(){
      var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
      this.setState({
        selectedColor: item,
      })
    }

	   playDa1=()=> {
        this.setState({totalScore: this.state.totalScore +1})
		try {
			SoundPlayer.playSoundFile('da1', 'wav')
		} catch (e) {
			alert('Cannot play the file')
    	}
    }

    playDa2=()=> {
        this.setState({totalScore: this.state.totalScore +1})
		try {
			SoundPlayer.playSoundFile('da2', 'wav')

		} catch (e) {
			alert('Cannot play the file')
    	}
    }

    playDa3=()=> {
        this.setState({totalScore: this.state.totalScore +1})
    	try {
    		SoundPlayer.playSoundFile('da3', 'wav')
    	} catch (e) {
    		alert('Cannot play Song')
    	}
    }

    playDa4=()=> {
        this.setState({totalScore: this.state.totalScore +1})
    	try {
    		SoundPlayer.playSoundFile('da4', 'wav')
    	} catch (e) {
    		alert('Cannot play Song')
    	}
    }


    state = {
      defaultAnimationDialog: false,
    };

    _showModal() {
      this.setState({defaultAnimationDialog: false,})
    }



    render() {
        return(
            <Container>
            	<Header style={{backgroundColor: '#3498db'}}>
            		<Left>
            			<Button transparent onPress={()=> this.props.navigation.navigate('LeadBoards')}>
            				<Icon name="ios-podium" />
            			</Button>
            		</Left>
            		<Body>
            			<Title>Fun TapTap!</Title>
            		</Body>
            		<Right>
            			<Button transparent>
            				<Icon name="ios-cloud-upload" />
            			</Button>
            		</Right>
            	</Header>
            	<Content style={{backgroundColor: this.state.selectedColor }}>
            		<View style={{width: '100%', height: 25, backgroundColor:'#3498db'}} />
            		<Body>
	            		<View style={{justifyContent: 'center', alignItem: 'center', translateY: -25}}>
		            		<Card style={{height: 50, width: 150}} transparent onPress={this._showModal}>
		            			<CardItem>
		            				<Text style={{fontSize: 18}}>Score: {this.state.totalScore}</Text>
		            			</CardItem>
		            		</Card>
		            	</View>
		            </Body>

		            <Body>
		            	<View styles={{marginTop: 10}}>
		            		<Image style={styles.imageTap} source={require('../assets/spongebob.png')} />
		            	</View>
		            </Body>
		            <View transparent style={{flex: 1, flexDirection:'row', backgroundColor: 'none', alignSelf: 'flex-end'}}>
		            	<Button rounded style={{backgroundColor: '#8e44ad', marginLeft: 50, marginTop: 125}} onPress={this.playDa1}>
							<Icon name="ios-star" />
						</Button>
	            		<Button rounded style={{backgroundColor: '#27ae60', marginLeft: 50, marginTop: 100}} onPress={this.playDa2}>
							<Icon name="ios-leaf" />
						</Button>
		            	<Button rounded style={{backgroundColor: '#e74c3c', marginLeft: 50, marginTop: 125}} onPress={this.playDa3}>
							<Icon name="ios-nuclear" />
						</Button>
						<Button rounded style={{backgroundColor: '#f39c12', marginLeft: 50, marginTop: 100}} onPress={this.playDa4}>
							<Icon name="ios-medical" />
						</Button>
		            </View>
            	</Content>
            </Container>


            <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          dialogTitle={
            <DialogTitle
              title="Popup Dialog - Default Animation"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left"
            />
          }
          actions={[
            <DialogButton
              text="CANCEL"
              onPress={() => {
                this.setState({ defaultAnimationDialog: false });
              }}
              key="button-1"
            />,
            <DialogButton
              text="OK"
              onPress={() => {
                this.setState({ defaultAnimationDialog: false });
              }}
              key="button-2"
            />,
          ]}
        >
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}
          >
            <Text>Default Animation</Text>
            <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>
          </DialogContent>
        </Dialog>
        );
    }
}

const styles = StyleSheet.create({
	imageTap: {
		width: 200,
		height: 250
	},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000',
  }
});