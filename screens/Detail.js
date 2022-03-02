import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const Detail = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  const {item} = route.params;
  console.log(item)
  navigation.setOptions({ headerTitle: item.title })

  const renderItem = ({item, index}) =>(
    <View style={{ marginVertical:10, marginHorizontal:5, width: 300, height: 250, borderRadius:15, backgroundColor:'white' , alignItems:'center'}}>
      <Text style={{fontFamily:'Roboto_700Bold', fontSize:21}}>Step {index+1}</Text>
      <Image source={item.img} style={{ marginVertical:10, width: 270, height: 200, borderRadius:15 }} />
    </View>
  )
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        {/* Materials */}
        <View style={{marginVertical:10, marginHorizontal:5,backgroundColor:'white', borderRadius:15, padding:7}}>
          <Text style={{fontFamily:'Roboto_700Bold', fontSize:25}}>Materials: </Text>
          <Text style={{fontFamily:'Roboto_400Regular', fontSize:15}}>{item.materials}</Text>
        </View>
        {/* Step */}
        <FlatList data = {item.step} renderItem = {renderItem} horizontal showsHorizontalScrollIndicator = {false} keyExtractor={(item) => item.index}/>
        <View style={{marginVertical:10, marginHorizontal:5,backgroundColor:'white', borderRadius:15, padding:7}}>
        <Text style={{fontFamily:'Roboto_700Bold', fontSize:25,marginVertical:10}}>Video Instruction </Text>
          <YoutubePlayer
            style={{alignItems:'center'}}
            height={500}
            width={400}
            videoId={item.videoId}
          />
        </View>
      </View>
    );
  }
};

export default Detail;

const styles = StyleSheet.create({});
