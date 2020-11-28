import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Container = styled.div`
    margin-bottom: 7%;
    height: 7%;
    width: 60%;
    background-color: var(--black);
    border-radius: var(--border-radius);
`;

const Plus = styled.div`
    cursor: pointer;
    z-index: 999;
    position: absolute;
    margin-top: -0.7%;
    margin-left: -1.3%;
    background-color: var(--red);
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: linear-gradient(var(--red-dark), var(--red));

        svg {
            transform: scale(1.1);
        }
    }

    svg {
        transition: transform 100ms var(--easing);
        height: 70%;
        width: 70%;
        color: var(--white);
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    span {
        color: var(--grey);
        font-weight: bold;
    }
`;

const ManagerTitle = ({ title }) => {
    return (
        <Container>
            <Plus>
                <AiOutlinePlus />
            </Plus>
            <Title>
                <span>{title}</span>
            </Title>
        </Container>
    );
}

export default ManagerTitle;