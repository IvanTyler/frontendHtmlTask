import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { bottomRoutes, routes } from '../../data/mock-data';
import { Dots } from '../dots/dots';
import styled from 'styled-components';
import { NavigationList } from '../NavigationList/NavigationList';

export const SideBar = styled.div`
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: ${props => props.isopened ? '90px' : '200px'};
        height: 100%;
        border-radius: 12px;
        margin-top: 20px;

        background-color: ${props => props.color === 'light' ?
        'var(--color-sidebar-background-light-default)' :
        'var(--color-sidebar-background-dark-default)'};

        border: solid 2px ${props => props.color === 'light' ?
        'var(--color-sidebar-background-light-default)' :
        'var(--color-button-background-dark-active)'};
        transition: width var(--second) ease;
    `;

const LinkStyled = styled.a`
        position: relative;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 20px;
    `;

const ImgStyled = styled.img`
        width: 30px;
        margin-left: ${props => props.isopened ? '7' : '0'}px;
    `;

const ButtonStyled = styled.button`
        position: absolute;
        right: ${props => props.isopened ? '-55' : '-30'}px;

        background-color: ${props => props.color === 'light' ?
        'var(--color-button-background-light-default)' :
        'var(--color-button-background-dark-default)'};

        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: transparent;
        box-shadow: 0 0 2px;
        cursor: pointer;
        transition: var(--second);

        &:hover {
            background-color: ${props => props.color === 'light' ?
        'var(--color-sidebar-background-light-hover)' :
        'var(--color-sidebar-background-dark-hover)'};
        }

        &>svg {
            color: ${props => props.color === 'dark' ?
        'var(--color-sidebar-background-light-default)' :
        'var(--color-sidebar-background-dark-default)'};
        }
    `;

const TextLogo = styled.span`
        color: ${props => props.color === 'light' ?
        'var(--color-text-logo-light-default)' :
        'var(--color-text-dark-default)'};
        font-weight: 600;
        visibility: ${props => props.isopened ? 'hidden' : 'visible'};
        opacity: ${props => props.isopened ? '0' : '1'};
        transition: visibility var(--second) ease, opacity var(--second) ease;
    `;

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 50px 20px;
        min-height: 100%;
        height: 100%;
        background-color: ${props => props.color === 'light' ?
        'var(--color-text-dark-default)' :
        'var(--color-button-background-dark-active)'};
`;

const ButtonSwitchTopic = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        padding: 15px;
        outline: none;
        border: none;
        height: 30px;
        border-radius: 20px;
        cursor: pointer;

        color: ${props => props.color === 'light' ?
        'var(--color-text-light-hover)' :
        'var(--color-text-dark-hover)'};

        background-color: ${props => props.color === 'light' ?
        'var(--color-button-background-light-active);' :
        'var(--color-text-logo-light-default)'};

        transition: var(--second);
`


const Sidebar = (props) => {

    const { color, setIsSwitchTopic } = props;
    const [isOpened, setIsOpened] = useState(false);
    const [routesNavList, setRoutesNavList] = useState(routes);

    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (id) => {
        setRoutesNavList((state) => state.map((el) => {
            return {
                ...el,
                active: el.id === id,
            }
        }));
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    const copiedText = (text) => {
        isOpened && navigator.clipboard.writeText(text)
    }

    const switchTopic = () => setIsSwitchTopic(topic => !topic)


    return (
        <Wrapper color={color}>
            <ButtonSwitchTopic
                onClick={switchTopic}
                color={color}
            >
                Переключение темы
            </ButtonSwitchTopic>
            <SideBar
                className={containerClassnames}
                {...(isOpened ? { isopened: 'true' } : {})}
                color={color}
            >
                <Dots />
                <LinkStyled>
                    <ImgStyled
                        {...(isOpened ? { isopened: 'true' } : {})}
                        src={logo} alt="TensorFlow logo"
                    />
                    <TextLogo
                        color={color}
                        {...(isOpened ? { isopened: 'true' } : {})}
                    >TensorFlow</TextLogo>

                    <ButtonStyled
                        color={color}
                        {...(isOpened ? { isopened: 'true' } : {})}
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={isOpened ? 'angle-right' : 'angle-left'} />
                    </ButtonStyled>
                </LinkStyled>



                <NavigationList
                    color={color}
                    isOpened={isOpened}
                    goToRoute={goToRoute}
                    list={routesNavList}
                    copiedText={copiedText}
                />

                <NavigationList
                    color={color}
                    isOpened={isOpened}
                    goToRoute={goToRoute}
                    list={bottomRoutes} />

            </SideBar>
        </Wrapper>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
