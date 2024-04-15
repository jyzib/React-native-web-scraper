import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Formfeilds from "../../components/Formfeilds";
import { useState } from "react";
import CustomeBtn from "../../components/CustomeBtn";
import { Link } from "expo-router";
import {createUser} from '../../lib/appwrite'
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
const handelsubmit = ()=>{
  console.log('object')
  createUser(form)
  console.log(form)
  setForm({
    email: "",
    password: "",
    username: "",
  })
}

  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView>
        <View className={"justify-center w-full items-center"}>
          <Link className="h-[300px]" href={"/"}>
            <Image
              source={images.yatharthritilogo}
              resizeMode="contain"
              className={"w-[300]"}
            />
          </Link>
          <View className={" w-full items-start px-7"}>
            <Text className={"text-white text-2xl font-psemibold"}>
              Sign Up
            </Text>

            <Formfeilds
              title="User Name"
              handelform={(e) => setForm({...form,username:e})}
              value={form.username}
              otherStyle="mt-4"
              KeyboardType="email-address"
            />

            <Formfeilds
              title="Email"
              handelform={(e) => setForm({...form,email:e})}
              value={form.email}
              otherStyle="mt-4"
              KeyboardType="email-address"
            />

            <Formfeilds
              title="Password"
              handelform={(e) => setForm({...form,password:e})}
              value={form.password}
              otherStyle="mt-4"
              KeyboardType="password"
            />

            <CustomeBtn
              title="Sign Up"
              handelPress={handelsubmit}
              isLoading={false}
              containerStyles="w-full mt-8"
            />

            <Text
              className={"text-white text-center mt-10 text-xl flex w-full"}
            >
             Have a account already ? 
              <Link
                className={"text-secondary-100 font-pbold"}
                href={"/Sign-in"}
              >
                 Sign In
              </Link>
            </Text>

            <View></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
