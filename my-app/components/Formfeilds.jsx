import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useState } from "react";
import {icons} from '../constants'
const Formfeilds = ({ otherStyle, title, KeyboardType ,handelform,value }) => {
  const [isPassword,setIspassword] = useState(true)
  if (KeyboardType == "password") {
  }

  const handelpress = ()=>{
 
    setIspassword(!isPassword)
  }
  
  return (
    <View className={`space-y-2 ${otherStyle} w-full`}>
      <Text className={"text-base text-gray-400 font-pmedium"}>{title}</Text>

    

      <View
        className={
          "w-full bg-black-100 h-16 px-4 rounded-2xl border-2 border-black-200  focus:border-secondary-200 items-center"
        }
      >
      
   

{KeyboardType == "password" ?
<View className={'relative  w-full'} >



 <TouchableOpacity onPress={handelpress} className="text-white  absolute right-0 top-1 z-20" >
{isPassword?<Image className={'w-8'}  source={icons.eye} resizeMode="contain" />:<Image className={'w-8'}  source={icons.eyeHide} resizeMode="contain" />}


</TouchableOpacity>

<TextInput value={value} onChangeText={handelform} secureTextEntry={isPassword} className={"text-white w-full h-full"}  /> 
</View>  : <TextInput value={value} onChangeText={handelform} className={"text-white w-full h-full"}  /> }

    
       
 

      </View>
    </View>
  );
};




export default Formfeilds;
