import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Detail({navigation}) {
    const [movie,setMovies] = useState(null)
    useEffect(()=>{
        let url ='http://www.omdbapi.com/?i='+ navigation.getParam('imdbID') +'&apikey=87d10179'
        fetch(url)
        .then(response=>response.json())
        .then(responseJson => {
            console.log(responseJson);
            setMovies(responseJson)
        })
        .catch(error=>{
            //setIsLoading(false);
            console.log(error);
            //when it got error jump back to previous
        })

    },[])
    useEffect
  return (
    <View style={styles.container}>
        {
            movie ?
            <View>
                <Image source={{uri:movie.Poster}} style={{width:100, height:100}}/>
                <Text>{movie.Title}</Text>
                <Text>{movie.Year}</Text>
                </View> : <View />
        }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
