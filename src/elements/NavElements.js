import styled from "styled-components"

export const NavWrapper = styled.nav`
grid-column:2/span 12;
grid-row:1/2;
displey:flex;
align-items:center;
@madia ${props => props.theme.breakpoints.tablet}{
    grid-column:2/span 6;
    
  
}

`