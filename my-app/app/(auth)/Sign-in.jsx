import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import Formfeilds from '../../components/Formfeilds'
import { useState } from 'react'
import CustomeBtn from '../../components/CustomeBtn'
import { Link } from 'expo-router'
const Signin = () => {
    const [form,setForm] = useState({
        email:'',password:''
    })
  return (
   <SafeAreaView className={'bg-primary h-full'}>
<ScrollView>
<View className={'justify-center w-full items-center'}>
    <Link className='h-[300px]'  href={'/'}>
<Image source={images.yatharthritilogo}  resizeMode='contain' className={'w-[300]'} />
    </Link>
<View className={' w-full items-start px-7'}>

<Text className={'text-white text-2xl font-psemibold'} >Sign in</Text>

<Formfeilds 
 title='Email' 
 handelform = {()=>console.log(e)}
value={form.email}
otherStyle="mt-4"
KeyboardType = 'email-address'
 />


<Formfeilds 
 title='Password' 
handelform = {()=>console.log(e)}
value={form.password}
otherStyle="mt-4"
KeyboardType = 'email-address'
 />

<CustomeBtn 
   title="Sign in"
   handelPress={() => {}}
   isLoading={false}
   containerStyles="w-full mt-8"
/>

<View>

</View>
</View>
</View>
</ScrollView>
   </SafeAreaView>
  )
}

export default Signin