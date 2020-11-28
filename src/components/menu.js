import React from 'react';
import styled from 'styled-components';
import { FiMessageCircle, FiActivity} from 'react-icons/fi';
import { BsViewStacked, BsArchive } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const menuItems = [
    { label: 'Dashboard', link: ROUTES.DASHBOARD, icon: BsViewStacked },
    { label: 'Messages', link: ROUTES.DASHBOARD_MESSAGES, icon: FiMessageCircle },
    { label: 'Activity', link: ROUTES.DASHBOARD_ACTIVITY, icon: FiActivity },
    { label: 'Archives', link: ROUTES.DASHBOARD_ARCHIVES, icon: BsArchive },
]

const Container = styled.div`
    margin: 5% 0;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: space-around;

    ul {
        padding: 0 15%;
        list-style-type: none;

        li {
            a {
                display: grid;
                grid-template-columns: 1fr 3fr;
                align-items: center;
                text-decoration: none;
                color: var(--grey);

                svg {
                    height: 1.7em;
                    width: 1.7em;
                }

                h3 {
                    padding-left: 5%;
                    font-size: var(--fz-md);
                    font-weight: 500;
                }

                transition: all 100ms var(--easing);
            }

            a:hover {
                color: var(--red);
            }
        }
    }
`;

const Menu = () => {
    return (
        <Container>
            <ul>
                {menuItems.map(({ label, link, icon: Icon }, index) => (
                    <li key={index}>
                        <Link to={link}>
                            <Icon />
                            <h3>{label}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Menu;