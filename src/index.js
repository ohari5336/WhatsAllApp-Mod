import L from './pack/utils/Log'
import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './pack/AppContainer'
import { initApi } from "./pack/utils/WWapApi";

// Get all current chat numbers:
//WAA_Api.WLAPStore.Chat.models.map((x) => x.__x_id.user).join(',')

// Created in injector.js
const reactRoot = document.getElementById('whatsallapp-root')

if (reactRoot) {
    L('Starting WhatsAllApp')
    L('Polling Wapp DOM')
    let pollCounter = 0
    const wappDomTimer = setInterval(function() {
        if (document.getElementsByClassName('app').length > 0) {
            clearInterval(wappDomTimer)
            L('Wapp DOM is ready!')
            initApi().then(() => {
                ReactDOM.render(
                    <AppContainer/>,
                    reactRoot
                )
            })

        } else {
            L('Waiting for Wapp DOM...')
        }
        pollCounter++

        if (pollCounter > 240) {
            console.error('Wapp DOM is not ready in time, exiting WhatsAllApp...')
            clearInterval(wappDomTimer)
        }
    }, 250);


} else {
    L('WhatsAllApp is disabled, exiting')
}
