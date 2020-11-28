import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar';
import Avatar from '../components/avatar';
import TaskManager from '../components/taskManager';

import bg from '../images/canyon.jpg';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    background-color: var(--dark);
`;

const Main = styled.div`
    background: url(${bg}) no-repeat;
    background-size: cover;
    height: 100%;
`;

const Dashboard = () => {

    return (
        <Container>
            <Sidebar />
            <Avatar />
            <Main>
                <TaskManager />
            </Main>
		</Container>
    );
}

export default Dashboard;
