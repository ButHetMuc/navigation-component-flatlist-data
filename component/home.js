import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text} > Wellcome </Text>
            <Button
                title="Get start"
                onPress={() =>
                navigation.navigate('Work')
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:21,
        fontWeight:'bold',
    }
})
export default HomeScreen;