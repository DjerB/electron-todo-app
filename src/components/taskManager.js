import React from 'react';
import styled from 'styled-components';

import TaskColumn from './taskColumn';

const todos = [
    { title: "Update my soft", description: "Software needs to be updated"},
    { title: "Update my soft and go run some errands", description: "Software needs to be updated"},
    { title: "Update", description: "Software needs to be updated"},
];

const dones = [
    { title: "Buy a laptop", description: "Macbook pro 2018"},
];

const Container = styled.div`
    padding: 3% 7%;
    height: 100%;
    width: 100%;
    max-height: 100vh;

    overflow-y: scroll;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10%;
`;

const columns = [
    { title: "TO DO", tasks: todos },
    { title: "DONE", tasks: dones },
];

const TaskManager = () => {
    return (
        <Container>
            {columns.map(({ title, tasks }, index) => (
                <TaskColumn key={index} title={title} tasks={tasks} />
            ))}
        </Container>
    );
}

export default TaskManager;