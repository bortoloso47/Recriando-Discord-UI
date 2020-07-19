import React from 'react';

import { Container, Role, User, Avatar } from './styles';

function UserRow({nickName, isBot}){
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickName}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
}


export default function UserList(){
    return(
        <Container>
            <Role>Dispinível - 1</Role>
            <UserRow nickName="Alessander Bortoloso" />

            <Role>Offline - 3</Role>
            <UserRow nickName="Diego" isBot />
            <UserRow nickName="Alex" />
            <UserRow nickName="Xande" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
        </Container>
    )
}