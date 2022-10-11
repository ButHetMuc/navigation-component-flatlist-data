import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const Add = (bundle)=>{
    const [text,setText] = useState('');
    // const [id,setId] = useState(1);
    // const [nations,setNations] = useState([
    //     {
    //         id:1,
    //         name: 'France',
    //     },
        
    // ]);

    const onPressAdd = ()=>{
        var id = bundle.id;
        bundle.setNations([...bundle.nations,{id : id+1,name: text}]);
        bundle.setId(id+1);
        setText('');
    }

    return (
        <View style= {styles.container}>
            <TextInput  placeholder='typing here' 
                        style = {styles.textInput} value={text} onChangeText = {newText => setText(newText)}  />
            <Button title='add' onPress={onPressAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:16,
        marginTop:50,
    },
    textInput:{
        flex:1,
        borderWidth:1,
        marginEnd:8,
    }
})
export default Add;