import 'react-native-gesture-handler'
import React from 'react'
import { LogBox } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'

import Routes from './routes/index'


const queryClient = new QueryClient()
LogBox.ignoreLogs(['new NativeEventEmitter'])
function App() {
  return (    
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      )
}

export default App
