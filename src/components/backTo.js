import React from 'react';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
    span {
        cursor: pointer;
        background-color: var(--black);
        padding: 2% 3%;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;

        svg {
            color: var(--white);
            width: 1em;
            height: 1em;
        }
    }

    h3 {
        color: var(--white);
        font-size: var(--fz-xl);
    }
`;

const BackTo = () => {
    return (
        <Container>
            <span><BiArrowBack /></span>
            <h3>Name of the project</h3>
        </Container>
    );
}

export default BackTo;