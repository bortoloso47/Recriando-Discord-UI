import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';


export default function UserInfo() {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Alessander</strong>
                    <span>#1508</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}