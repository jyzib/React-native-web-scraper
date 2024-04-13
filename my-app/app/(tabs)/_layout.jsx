import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
const TabIcon = ({ color, icon, name, focused }) => {
    console.log(focused)
    console.log(color)
  console.log(icon);
  return (
    <View className="flex items-center justify-center gap-2 p-6">
      <Image
        className="w-6 h-6"

        resizeMode="contain"
        tintColor={color}
        source={icon}
      />
      <Text className={`font-bold text-sm`} style={{color:color}} >{name}</Text>
    </View>
  );
};

const tablayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#ffa001',
        tabBarInactiveTintColor:'#cdcde0',
        tabBarStyle:{
            backgroundColor:"#161622",
            borderTopWidth:1,
            borderTopColor:'#ffa001',
            height:84
        }

    }}

    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name={"home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name={"Create"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name={"Profile"}
              focused={focused}
            />
          ),
        }}
      />

    </Tabs>
  );
};

export default tablayout;
