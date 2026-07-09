import styled from 'styled-components'

export const AddButton = styled.button`
background: #8fd456;
color :#000;
height: 30px;
padding: 5px 10px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-left: 10px;
&:hover{
    opacity: 0.8;
background: #6fae3f;
}

`

export const DeleteButton = styled.button`
background: #f00000;

height: 30px;
`

export const Conteiner = styled.div`
background: #268e8c;
padding: 20px;
border-radius: 8px;

h1{
color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 25px;
}
h2{
color: #fff;
display: flex;
align-items: center;
justify-content: center; 
}

input{
background: #fff;
border: 1px solid #ccc;
border-radius: 4px;
padding: 8px;
outline: none;
}
`
export const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
background: #fff;
border-radius: 5px;
padding: 10px;
margin-top: 10px;
p{
    text-transform: capitalize;//para inciar o letra do nome do produto em maiusculo
    font-weight: bold;
}


`
export const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
font-size: 18px;
`