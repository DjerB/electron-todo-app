import React from 'react';
import styled from 'styled-components';
import { RiUserAddLine } from 'react-icons/ri';

const fake = [
    { name: "Oliver", firstName: "Francis", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { name: "Wilkinson", firstName: "George", image: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg" },
    { name: "Bryant", firstName: "Stella", image: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg" },
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 0;
`;

const Member = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    align-items: center;
    margin: 2% 0;
    cursor: pointer;

    transition: all 100ms var(--easing);
    &:hover {
        transform: scale(1.03);
    }

    .avatar, .add-avatar {
        object-fit: cover;
        vertical-align: middle;
        width: 2.5vmax;
        height: 2.5vmax;
        border-radius: 50%;
    }

    .add-avatar {
        border: 3px dotted var(--pink);
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            height: 70%;
            width: 70%;
            color: var(--white);
        }
    }
    
    span {
        color: ${props => props.add ? "var(--pink)" : "var(--white)"};
        font-weight: ${props => props.add ? "bold" : "500"};
        font-size: var(--fz-md);
    }
`;

const Members = () => {
    return (
        <Container>
            {fake.map(({ name, firstName, image }, index) => (
                <Member key={index}>
                    <img src={image} alt={firstName + " " + name} className="avatar" />
                    <span>{firstName + " " + name}</span>
                </Member>
            ))}
            <Member add={true}>
                <div className="add-avatar">
                    <RiUserAddLine />
                </div>
                <span>Invite</span>
            </Member>
        </Container>
    )
}

export default Members;