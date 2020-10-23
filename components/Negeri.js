import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';


export default function Negeri({navigation}) {
    const [search,SetSearch] = useState('')
    const [states, setStates] =useState([])
    const callApi =()=>{
        let url ='https://api-explore.anak2u.com.my/api/clients/negeri/'
        fetch(url)
        .then(response=>response.json())
        .then(responseJson =>{
            console.log(responseJson);
            setStates(responseJson["Search"])
        })
        .catch(error=>{
            //setIsLoading(false);
            console.log(error);
            //when it got error jump back to previous
        })

    }
    return (  label='Some Label'  data={
      this.props.menuItems}
        containerStyle={
      styles.dropdownStyle}
       onChangeText={
      (states) => {
       this.setState({
       setStates: states }
      );
       }
      }
       /> );
       }
}
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    textInput:{
        borderColor: 'black',
        height:40,
        borderWidth:1,
        flex:2,
        padding:10,
        marginRight:10
    },
    viewStyle:{
        flex:1,
        backgroundColor: 'pink',
        padding:10,
        marginBottom:10,
        flexDirection:'row',
        height:100,

    },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
