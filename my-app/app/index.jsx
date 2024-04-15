
import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect,router } from "expo-router";
import { Image } from "react-native";
import { images } from "../constants";
import CustomeBtn from "../components/CustomeBtn";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView contentContainerStyle={{ height: "100vh" }}>
        <View className={"w-full  items-center h-full px-4 gap-y-8  mt-10"}>
          
          <Image
            resizeMode="contain"
            className={"w-[240px] h-[100px] "}
            source={images.yatharthritilogo}
          />

          <Image
            resizeMode="contain"
            className={"w-[300px] h-[330px] "}
            source={images.Scraping}
          />

          <View className={"relative mt-5"}>
            <Text className={"text-white text-3xl text-center"}>
              DataMiner Pro: Powerful{" "}
              <Text className={"text-secondary-100"}>Web Scraping</Text>{" "}
              Solution
            </Text>
            <Text className={"text-white w-90 text-center mt-2 text-sm"}>
              Extract valuable data from websites effortlessly with DataHarvest.
              This advanced web scraping tool offers{" "}
            </Text>
          </View>
       
          <CustomeBtn
            title="Continue with Email"
            handelPress={() => {router.push('/Sign-in')}}
            isLoading={false}
            containerStyles="w-full mt-8"
          />
       

          <CustomeBtn
            title="Home"
            handelPress={() => {router.push('/home')}}
            isLoading={false}
            containerStyles="w-full mt-8 mb-[100px]"
          />

 

        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style='light' />

    </SafeAreaView>
  );
}
