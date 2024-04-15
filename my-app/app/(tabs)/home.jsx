import { View, Text, ScrollView } from 'react-native'
import axios from 'axios'
import { useEffect } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Formfeilds from '../../components/Formfeilds'
import { useState } from 'react'
import CustomeBtn from '../../components/CustomeBtn'

const home = () => {
const [search,setSearch] = useState('')
const [data,setdata] = useState('')
const getdata = async (x)=>{
  const url = 'http://192.168.1.27:8000/scra/scrap/';

  // Define the form data
  const formData = new FormData();
  formData.append('website_name', x);
  
  // Add more key-value pairs as needed
  
  // Make the POST request
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Handle response
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    // Handle data
    console.log(JSON.parse(data));
    setdata(JSON.parse(data).content)
  })
  .catch(error => {
    // Handle error
    console.log( error);
  });
  
}

const handelsubmit =  ()=>{
  console.log('object')
  getdata(search)

}




  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{ height: "100vh" }}>
<Formfeilds 
 title='Search' 
 handelform = {(e)=>setSearch(e)}

otherStyle="mt-4"
KeyboardType = 'email-address'
 />


<CustomeBtn
              title="search"
              handelPress={handelsubmit}
              isLoading={false}
              containerStyles="w-full mt-8"
            />
      <Text>{data}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home