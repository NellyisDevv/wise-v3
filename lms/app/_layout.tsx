import '@/global.css'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { LogBox } from 'react-native'
import { tokenCache } from '@/utils/cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}
LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys'])

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  )
}
