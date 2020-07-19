import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

function ServerList(){
    return(
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton hasNotification/>
            <ServerButton mentions={3}/>
            <ServerButton mentions={100}/>
            <ServerButton mentions={50}/>
        </Container>
    );
}

export default ServerList;