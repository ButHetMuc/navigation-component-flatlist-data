import { useState } from "react";
import { Button, FlatList, StyleSheet, View ,Text} from "react-native"




const List = (bundle)=>{
    
    const oneNation = ({item}) =>(
        <View style = {styles.item}>
            <Text style = {styles.text}> {item.id}</Text>
            <Text style = {styles.text}> {item.name}</Text>
            <Button title='hello boy'/>
        </View>
    );

    const headerComponent = ()=>{
        return <Text style = {styles.textHeader}> Nations</Text>
    }
    const itemSeparator = ()=>{
        return <View style = {styles.separator}/>
    }

    return (
        <FlatList style = {styles.list}
            ListHeaderComponent={headerComponent}
            ListHeaderComponentStyle = {styles.listHeader}
            ItemSeparatorComponent = {itemSeparator}
            data = {bundle.nations}
            renderItem = {oneNation}
            keyExtractor = {item => item.id}
            ListEmptyComponent = {<Text> this is very nations</Text>}
        />
    )
}
const styles = StyleSheet.create({
    textHeader:{
        fontSize:18,
        fontWeight:'bold',
        
    },
    listHeader:{
        alignItems:'center',
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'skyblue',
    },
    list:{
        marginHorizontal:16,
        marginTop:50,
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
    },
    separator:{
        height:5,
        width:'100%',
        backgroundColor:'#CCC',
    },
});

export default List;