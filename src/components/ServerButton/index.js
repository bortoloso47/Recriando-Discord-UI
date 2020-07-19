import React from 'react';

import { Button } from './styles';
import Logo from '../../assets/Logo.svg'


export default function ServerButton({ selected, isHome, hasNotification, mentions }) {
    return (
        <Button
            isHome={isHome}
            hasNotification={hasNotification}
            className={selected ? 'active' : ''}
            mentions={mentions}
        >
            {isHome && <img src={Logo} alt="Game"/>}
        </Button>
    );
}