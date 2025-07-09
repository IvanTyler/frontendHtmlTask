import styled from "styled-components"


const DotsWrapper = styled.ul`
    display: flex;
    gap: 7px;
`;

const DotsItemStyle = styled.li`
    height: 10px;
    min-width: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.color}
`

const Dots = () => {
    return (
        <DotsWrapper>
            <DotsItemStyle color={'red'} />
            <DotsItemStyle color={'yellow'} />
            <DotsItemStyle color={'green'} />
        </DotsWrapper>
    )
}

export default Dots