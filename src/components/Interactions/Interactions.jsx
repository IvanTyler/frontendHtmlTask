import styled from "styled-components"


const InteractionsWrapper = styled.ul`
    display: flex;
    gap: 7px;
`;

const InteractionsItemStyle = styled.li`
    height: 10px;
    min-width: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.color}
`

export const Interactions = () => {
    return (
        <InteractionsWrapper>
            <InteractionsItemStyle color={'red'} />
            <InteractionsItemStyle color={'yellow'} />
            <InteractionsItemStyle color={'green'} />
        </InteractionsWrapper>
    )
}