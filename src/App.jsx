import React, { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from 'react-router';


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
