import React                            from "react";
import {connect}                        from "react-redux";
import {StyleSheet, Text, View, Button} from "react-native";

class HomeScreen extends React.Component
{
	render()
	{
		return (
			<View style={styles.container}>
				<Text>
					Dificulty
				</Text>
				<Button title="1" onPress={() => this.props.navigation.navigate("Game")}/>
				<Button title="2" onPress={() => this.props.navigation.navigate("Game")}/>
				<Button title="3" onPress={() => this.props.navigation.navigate("Game")}/>
				<Button title="4" onPress={() => this.props.navigation.navigate("Game")}/>
			</View>
		);
	}
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

const mapStateToProps = (state) =>
{
	const  {friends} = state

	return {friends}
};

export default connect(mapStateToProps)(HomeScreen);
