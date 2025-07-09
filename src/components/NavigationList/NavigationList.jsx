import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const NavigationListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 5px;

    &:last-child {
        margin-top: auto;
    }
`;

const NavigationListItem = styled.li`
    & > a {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        padding: 10px;
        border-radius: 12px;
        transition: background-color var(--second), color var(--second);
        cursor: pointer;
        color: ${props => props.color === 'light' ?
        'var(--color-text-light-default)' :
        'var(--color-text-dark-default)'};

        & > svg {
            margin-left: ${props => props.isopened ? '4' : '0'}px;
        }

        &:hover {
            color: ${props => props.color === 'light' ?
        'var(--color-text-light-hover)' :
        'var(--color-text-dark-hover)'};
            background-color: ${props => props.color === 'light' ?
        'var(--color-text-light-default)' :
        'var(--color-text-logo-light-default)'};
        }
    }

    ${props => props.active && props.color === 'light' && `
        & > a {
            color: var(--color-text-light-active);
            background-color: var(--color-button-background-light-active);
        }
    `}

    ${props => props.active && props.color === 'dark' && `
        & > a {
            color: var(--color-text-dark-active);
            background-color: var(--color-text-logo-light-default);
        }
    `}
`;

const TextItem = styled.span`
    visibility: ${props => props.isopened ? 'hidden' : 'visible'};
    opacity: ${props => props.isopened ? '0' : '1'};
    font-size: 18px;
    font-weight: 400;
    transition: visibility var(--second) ease, opacity var(--second) ease;
`;

export const NavigationList = (
    {
        goToRoute,
        list,
        isOpened,
        color,
        copiedText
    }) => {

    return (
        <NavigationListStyled>
            {list.map(route => (
                <NavigationListItem
                    {...(route.active ? { active: 'true' } : {})}
                    {...(isOpened ? { isopened: 'true' } : {})}
                    color={color}
                    key={route.id}
                >
                    <Link
                        onClick={() => {
                            goToRoute(route.id)
                            copiedText(route.title)
                        }}
                    >
                        <FontAwesomeIcon icon={route.icon} />
                        <TextItem {...(isOpened ? { isopened: 'true' } : {})}>{route.title}</TextItem>
                    </Link>
                </NavigationListItem>
            ))}
        </NavigationListStyled>
    )
}