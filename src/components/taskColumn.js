import React from 'react';
import styled from 'styled-components';

import Title from './managerTitle';
import Task from './task';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 3%;
`;

const Tasks = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TaskColumn = ({ title, tasks }) => {
    return (
        <Container>
            <Title title={title} />
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
        </Container>
    );
}

export default TaskColumn;