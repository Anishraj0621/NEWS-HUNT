import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Chatpost from './Chatpost';

const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: 'white',
    headerFontSize: '15px',
    botBubbleColor: 'red',
    botFontColor: '#fff',
    userBubbleColor: 'black',
    userFontColor: 'white',
};
const config = {
    width: "400px",
    height: "500px",
    floating: true,
};


export default class Chatbox extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: 'q-firstname',
                            message: 'What is your first name?',
                            trigger: 'firstname',
                        },
                        {
                            id: 'firstname',
                            user: true,
                            trigger: 'q-lastname'
                        },
                        {
                            id: 'q-lastname',
                            message: 'What is your last name?',
                            trigger: 'lastname',
                        },
                        {
                            id: 'lastname',
                            user: true,
                            trigger: 'q-email'
                        },
                        {
                            id: 'q-email',
                            message: 'Finally. what is you email?',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: 'q-submit'
                        },
                        {
                            id: 'q-submit',
                            message: 'Do you wish to submit?',
                            trigger: 'submit'
                        },
                        {
                            id: 'submit',
                            options: [
                                { value: 'y', label: 'Yes', trigger: 'end-message' },
                                { value: 'n', label: 'No', trigger: 'no-submit' },
                            ]
                        },
                        {
                            id: 'no-submit',
                            message: 'Your information was not submitted.',
                            end: true,
                        },
                        {
                            id: 'end-message',
                            component: <Chatpost />,
                            asMessage: true,
                            end: true,
                        },
                    ]}
                    {...config}
                />
            </ThemeProvider>
        )
    }
}
