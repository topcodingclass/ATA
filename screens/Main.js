import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
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

import steps from "../assets/Image";

const DATA = [
  {
    id: 1,
    title: "Leo the Lion",
    materials: "Plastic Plate, Yellow Lanyard, Beige Paint, White Pipe Cleaner",
    step: steps.first,
    src: require("../assets/1.png"),
  },
  {
    id: 2,
    title: "Sing Sing Microphone",
    materials:
      "Aluminum Foil, Origami, Tennis Ball, Used Toilet Paper Roll, Pipe Cleaner",
    step: ["2-1.jpg", "2-2.jpg", "2-3.jpg"],
    src: require("../assets/2.png"),
  },
  {
    id: 3,
    title: "Colorful Clouds",
    materials:
      "Brown Red Purple Blue Green Construction Paper, Cotton Balls, Yellow Lanyard",
    step: ["3-1.jpg", "3-2.jpg", "3-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 4,
    title: "Super Steamers",
    materials:
      "Used Tissue Roll, Two Gobbly Eyes, Red Steamer Paper, Green Steamer Paper, Two Green Cotton Balls, Red Orgami",
    step: ["4-1.jpg", "4-2.jpg", "4-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 5,
    title: "Happy flower",
    materials:
      "One Popsicle Stick, Yellow and Pink Lanyard, One Plastic Plate, Green Duck Tape",
    step: ["5-1.jpg", "5-2.jpg", "5-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 6,
    title: "Swim Swim Fishy",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["6-1.jpg", "6-2.jpg", "6-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 7,
    title: "Turkey Hanger",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["7-1.jpg", "7-2.jpg", "7-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 8,
    title: "In the Desert",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["8-1.jpg", "8-2.jpg", "8-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 9,
    title: "Happy Snowman",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["9-1.jpg", "9-2.jpg", "9-3.jpg"],
    src: require("../assets/3.png"),
  },
  {
    id: 10,
    title: "My Little Christman Tree",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["10-1.jpg", "10-2.jpg", "10-3.jpg"],
    src: require("../assets/3.png"),
  },
];

const Main = ({ navigation }) => {
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={{borderWidth:1.4, borderColor:'#AED6F1', borderRadius:10, width:170, height:200, margin:10, justifyContent:'center', alignItems:'center'}}
    onPress={() => navigation.navigate("Detail", { item: item })}
    >
      <Image style={{width:140, height:160, borderRadius:10, marginTop:10}} source= {item.src} />
      <Text style={{fontFamily:'Roboto_700Bold', marginTop:7, fontSize:15, color:'#1D8348'}}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{backgroundColor:'white'}}>
        {/* Logo */}
        <View style={{ marginTop: 20, paddingTop: 30, paddingHorizontal: 5 }}>
          <Image
            style={{ height: 170, width: "100%" }}
            source={require("../assets/ATALogo.png")}
          />
        </View>
        {/* Theraphy list */}
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList data={DATA} renderItem={renderItem} numColumns={2} />
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Main;
