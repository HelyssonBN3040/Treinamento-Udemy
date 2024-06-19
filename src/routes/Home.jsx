import React, { useState } from 'react'
import MyCompoenent from '../components/MyCompoenent'
import Events from '../components/Events'
import Data from '../components/Data'
import ListRender from '../components/ListRender'
import FirstComponent from '../components/FirstComponent'
import TemplateExpression from '../components/TemplateExpression'
import Title from '../components/Title'
import ExecuteFunction from '../components/ExecuteFunction'
import Message from '../components/Message'
import ChangeMessage from '../components/ChangeMessage'

const Home = () => {
    function showMessage(){
        console.log("Evento no componente pai!")
    }
    // state lift 
    const [message, setMessage ] = useState("")
    const handleMessage = (msg) => {
        setMessage(msg)
    }


    return (
        <div>

            <h1>Fundamentos do React e Relembrando tudo kk</h1>
            <FirstComponent />
            <TemplateExpression />
            <MyCompoenent />
            <Events />
            <Data />
            <ListRender />
            <Title/>
            <ExecuteFunction myFunction={showMessage}/>
            <Message msg={message}/>
            <ChangeMessage handleMessage={handleMessage}/>
        </div>
    )
}

export default Home