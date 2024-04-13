import { TouchableOpacity ,Text} from 'react-native'
import React from 'react'

const CustomeBtn = ({title,handelPress,containerStyles,isLoading}) => {
  return (
    <TouchableOpacity onPress={handelPress} activeOpacity={0.7} className={`bg-secondary-200 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading} >
      <Text className={'text-primary font-psemibold text-lg'} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomeBtn