import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineBold, AiOutlineUnderline, AiOutlineLink } from 'react-icons/ai';
import { RiUserAddLine } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';

const fake = [
    { name: "Oliver", firstName: "Francis", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { name: "Wilkinson", firstName: "George", image: "https://www.regardsurlemonde.fr/blog/wp-content/uploads/2015/10/photographe-SteveMcCurry-fille-afghane-1.jpg" },
    { name: "Bryant", firstName: "Stella", image: "https://apprendre-la-photo.fr/wp-content/uploads/2011/06/photo-portrait_vieil-homme_laurent-breillat-407x610.jpg" },
];

const anim = keyframes`
    0% { 
        transform: translateY(0px);
    }
    30% { 
        transform: translateY(3px); 
    }
    50% { 
        transform: translateY(-5px); width: 110%; height: 90px; background-color: var(--white); color: var(--black); 
    }  
    100% { 
        transform: translateY(0px); width: 110%; height: 200px; background-color: var(--white); color: var(--black); 
    }
`;

const Container = styled.div`
    background-color: var(--dark-lite);
    width: 100%;
    margin: 5% 0;
    border-radius: var(--border-radius);
    padding: 1em 1em;
    cursor: pointer;
    
    color: var(--white);
    font-weight: bold;

    input {
        border: none;
        outline: none;
        width: 100%;
        cursor: pointer;
        background: transparent;
        color: inherit;
        font-weight: inherit;
    }

    &.open {
        animation: ${anim} 800ms var(--easing);
        animation-fill-mode: forwards;

        input {
            cursor: text;
        }
    }
`;

const fade = keyframes`
    0% { 
        opacity: 0;
    } 
    100% { 
        opacity: 1;
    }
`;

const Form = styled.div`
    margin-top: 4%;
    padding-top: 2%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid var(--grey);
    opacity: 0;
    animation: ${fade} 400ms var(--easing);
    animation-fill-mode: forwards;
    animation-delay: 600ms;

    textarea {
        flex: 1;
        margin-bottom: 2%;
        border: none;
        resize: none;
        width: 100%;
        outline: none;
        font-family: inherit;
    }
`;

const FormBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Options = styled.div`
    display: flex;
    svg {
        cursor: pointer;
        margin-right: 0.5rem;
        height: 1.2rem;
        width: 1.2rem;
    }
`;

const Members = styled.div`
    display: flex;
    margin-right: ${props => props.margin};

    .avatar {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }
    
    .avatar:not(:first-child) {
        transition: transform 100ms var(--easing);
        &:hover {
            transform: translateY(-3px) scale(1.01);
        }
        margin-left: -45px;
    }
    
    .avatar img {
        object-fit: cover;
        width: 100%;
    }

    .avatar:first-child {
        margin-right: -6px;
        &:hover {
            margin-right: -15px;
        }
    }

    .add-avatar {
        border: 1px dotted var(--pink);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 50%;

        svg {
            height: 70%;
            width: 70%;
            color: var(--dark);
        }
    }

    .add-avatar:hover svg {
        color: var(--pink);
    }
`;

const SaveButton = styled.div`
    position: absolute;
    z-index: 999;
    right: -25%;
    border-radius: 50%;
    background-color: var(--red);
    padding: 5%;
    padding-bottom: 3%;
    cursor: pointer;

    &:hover {
        background: linear-gradient(var(--red-dark), var(--red));

        svg {
            transform: scale(1.1);
        }
    }

    svg {
        transition: transform 100ms var(--easing);
        color: var(--white);
        height: 2rem;
        width: 2rem;
    }
`;

const Task = ({ task }) => {
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const toggleOpen = () => setOpen(!open);

    const onChange = (event) => {
        event.stopPropagation();
        if (event.target.name === "title") {
            setTitle(event.target.value);
        } else if (event.target.name === "description") {
            setDescription(event.target.value);
        }
     }

    return (
        <Container onClick={toggleOpen} className={open && "open"}>
            <input 
                value={title.toUpperCase()} 
                disabled={!open}
                name={"title"}
                onChange={onChange} />
            {open ?
            <Form>
                <textarea 
                    onChange={onChange}
                    name={"description"}
                    value={description}
                    placeholder="As a user, I want to be able to...">

                </textarea>
                <FormBottom>
                    <Options>
                        <AiOutlineBold />
                        <AiOutlineUnderline />
                        <AiOutlineLink />
                    </Options>
                    <Members margin={`${(fake.length-1)*15}px`}>
                        <div className="avatar">
                            <div className="add-avatar">
                                <RiUserAddLine />
                            </div>
                        </div>
                        {fake.map(({ image, firstName, name }, index) => (
                            <div key={index} className="avatar">
                                <img src={image} alt={firstName + " " + name} className="avatar" />
                            </div>
                        ))}
                    </Members>
                </FormBottom>
                <SaveButton>
                    <FiCheck />
                </SaveButton>
            </Form>
            :null}
        </Container>
    );
}

export default Task;