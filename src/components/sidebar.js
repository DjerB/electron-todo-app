import React from 'react';
import styled from 'styled-components';

import BackTo from './backTo';
import Menu from './menu';
import Members from './members';

const Side = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8% 7%;
`;

const Sidebar = () => {
    return (
        <Side>
            <BackTo />
            <Menu />
            <Members />
        </Side>
    );
}

export default Sidebar;