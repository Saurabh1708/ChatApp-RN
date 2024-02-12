import React from 'react'
import { Chat } from './src/Chat/Chat'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from './src/Chat/components/Header'
import { Input } from './src/Chat/components/Input'
import { useChunkData } from './src/Chat/useChunkData'

function App(): React.JSX.Element {
  const { data, isLoading, startQueringData } = useChunkData()

  return (
    <SafeAreaProvider>
      <Header />
      <Chat isLoading={isLoading} data={data} />
      <Input startQueringData={startQueringData} />
    </SafeAreaProvider>
  )
}

export default App
