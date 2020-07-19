import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InpurIcon } from './styles';


export default function ChannelData() {
    const messageRef = useRef();

    useEffect(() => {
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage
                 author="Alessander" 
                 date="19/07/2020" 
                 content="Hoje é meu aniversário" 
                />

                <ChannelMessage
                 author="Diego" 
                 date="19/07/2020" 
                 content={
                     <>
                        <Mention>@Alessander</Mention>, Parabéns!!!
                     </>
                 }
                 isBot
                />

                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage
                    key={n}
                    author="Alessander" 
                    date="19/07/2020" 
                    content="Hoje é meu aniversário" 
                   />
                ))}
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="conversar em #chat-livre"/>
                <InpurIcon />
            </InputWrapper>
        </Container>
    )
}