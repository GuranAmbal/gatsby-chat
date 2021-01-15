import styled from "styled-components"

export const ContainerWrapper = styled.div`
height:100%;
display:grid;
grid-template-column:1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
grid-template-row:7.8rem 20rem 5rem auto;
gap:0 2 rem;

@madia ${props => props.theme.breakpoints.tablet}{
    grid-template-column:2rem repeat(6, 1fr) 2rem;
    grid-gap:0 1 rem;
  
}
@madia ${props => props.theme.breakpoints.mobile}{
    grid-template-column:1rem repeat(6, 1fr) 1rem;
   
  
}
`