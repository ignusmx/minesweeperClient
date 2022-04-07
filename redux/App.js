import "react-native-gesture-handler";
import React                  from "react";
import {Provider}             from "react-redux";
import {createStore}          from "redux";
import {StyleSheet}           from "react-native";
import {NavigationContainer}  from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import friendsReducer         from "./FriendsReducer";
import HomeScreen             from "./HomeScreen";
import FriendsScreen          from "./FriendsScreen";
import socketIO               from "socket.io-client";

const Stack = createStackNavigator();
const store = createStore(friendsReducer);

class App extends React.Component
{
	render()
	{
		return(
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Minesweeper" component={HomeScreen} />
						<Stack.Screen name="Friends" component={FriendsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}

componentDidMount()
{ 
	const socket = socketIO("wss://hometask.eg1236.com/game1/",{transports: ['websocket'], jsonp: false });

	socket.connect(); 
	socket.on('connect', () => {console.log("connected to socket server");}); 
}

const styles = StyleSheet.create
({
	container:
	{
		flex            :        1,
		backgroundColor :   "#fff",
		alignItems      : "center",
		justifyContent  : "center"
	}
});

export default App;
