import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    text-align: center;
    margin: 20px;
`;

const Header = () => (
    <HeaderContainer>
        <h1>Weather Dashboard</h1>
        <p>Visualizing temperature data over time</p>
    </HeaderContainer>
);

export default Header;
