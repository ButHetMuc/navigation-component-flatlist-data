import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Add from './add';
import List from './list';

const Work = ({navigation}) =>{

    const [id,setId] = useState(1);
    const [nations,setNations] = useState([
        {
            id:1,
            name: 'France',
        },
    ]);
    console.log(nations);
    return(
        <View style = {styles.container} >
            <Add nations = {nations} setNations = {setNations} id = {id} setId= {setId} />
            <List nations = {nations} setNations = {setNations} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Work;