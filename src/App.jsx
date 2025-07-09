import React, { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';


library.add(fas);


export function App() {

  const [isSwitchTopic, setIsSwitchTopic] = useState(false)

  return (
    <BrowserRouter>
      <Sidebar
        color={isSwitchTopic ? 'light' : 'dark'}
        setIsSwitchTopic={setIsSwitchTopic}
        isSwitchTopic={isSwitchTopic}
      />
    </BrowserRouter>
  )
}
