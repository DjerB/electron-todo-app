import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 5%;
    z-index: 999;
    width: 15%;
    left: calc(20% - 15% + 30px);
    height: 10%;

    .avatar {
        object-fit: cover;
        vertical-align: middle;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        margin: 0;
        color: var(--white);
    }

    h4 {
        margin: 0;
        color: var(--dark-lite);
        text-align: right;
        cursor: pointer;
    }
`;

const Avatar = () => {
    return (
        <Container>
            <Left>
                <h3>DELLA TATE</h3>
                <h4>Log out</h4>
            </Left>
            <img 
                src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
                alt="DELLA TATE"
                className="avatar"
            />
        </Container>
    );
}

export default Avatar;