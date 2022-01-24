import styled from "styled-components";



export const Container= styled.div`

display: flex;
justify-content: space-between;
max-width: 65vw;
margin-top: 8vw;
margin-left: auto;
margin-right: auto;
`
export const LoginWrap= styled.div`
display: flex;
flex-direction: column;
width: 30%;
color: #424242;
font-weight: 400;
@media screen and (max-width: 768px) {
  width: 80%;
}
span {
    color: navy;
    cursor: pointer;
}

input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    margin-bottom: 10px;
    border: #424242 2px solid;
    /* width: 90%; */
   
}
input[type=checkbox] {
   
    outline: 2px solid #424242;
    margin-right: 10px;
}
label{
    display: flex;
    flex-direction: column;
}
`
export const Row = styled.div`
display: flex;
margin-bottom: 10px;
`
export const ImageWrap= styled.div`
@media screen and (max-width: 768px) {
  display: none;
}
`
export const Button= styled.button`

background-color: #424242;
width: 190px;
color: #fff;
padding: 10px;
border: none;
font-size: 19px;
cursor: pointer;
`
export const AltLoginWrapper = styled.div`
display: flex;
flex-direction: column;


h6{
    display: flex;
 margin-left: 5vw;
    @media screen and (max-width: 425px) {
}
}
`
export const AltIconWrap = styled.div`
display: flex;
`

export const AltLogin= styled.div`
font-size: 20px;
border: 1px #424242 solid;
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin-left: 5px;


`