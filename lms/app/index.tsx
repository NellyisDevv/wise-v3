import { Text, View, Pressable } from 'react-native'

export default function Index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-black text-xl'>Something big coming soon! 🤓</Text>
      <Text className='text-sm mt-2'>More coming soon!</Text>
      <Pressable className='bg-noir p-3 rounded-md mt-4'>
        <Text className='text-sm text-white font-semibold'>Get notified</Text>
      </Pressable>
    </View>
  )
}
