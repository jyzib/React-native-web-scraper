import { View, Text ,TextInput} from 'react-native'
import React from 'react'

const Formfeilds = ({otherStyle,title}) => {
  return (
    <View className={`space-y-2 ${otherStyle} w-full`} >
      <Text className={'text-base text-gray-400 font-pmedium'} >{title}</Text>

<View className={'w-full bg-black-100 h-16 px-4 rounded-2xl border-2 border-black-200  focus:border-secondary-200 items-center'} >
<TextInput className={'text-white w-full h-full'} />
</View>

      
    </View>
  )
}

export default Formfeilds