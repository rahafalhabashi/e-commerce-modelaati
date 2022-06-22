// function FooterStyles() {
import styled from 'styled-components';

//     export const phantom = {
//         position: 'fixed',
//    left: "0",
//    bottom: "100",
//    width: "100%",
//    backgroundColor: 'red',
//    color: 'white',
//    textAlign: 'center',
//       }
export const Box = styled.div`
display: block;
  background-color: rgb(231, 231, 196);
  /* border-top:2px solid rgb(185, 185, 143); */
  /* position: grid-template: ; */
  width: 100%;
  bottom: 0;
  color: black;
  font-size: calc(10px + 2vmin);
  margin-top: 30px;
  padding-bottom: 0%;
  position: auto;
  bottom: 0;
  /* height: 2.5rem;   */

/* padding: 80px 60px;
    background: black;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block; */
    
    
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
    `;

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 1000px;
        margin: 0 auto;
        /* background: red; */
    `

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    `;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
                            minmax(185px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,
                            minmax(200px, 1fr));
    }
    `;

export const FooterLink = styled.a`
    color: black;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: white;
        transition: 200ms ease-in;
    }
    `;

export const Heading = styled.p`
    font-size: 24px;
    color: black;
    margin-bottom: 40px;
    font-weight: bold;
    `;

//     return
// }

// export default FooterStyles