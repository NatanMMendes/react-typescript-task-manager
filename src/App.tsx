
import React, { useState } from 'react';
import styled from 'styled-components';
import {FaCheck, FaPlus, FaTimes} from 'react-icons/fa';

const ModalContent = styled.div`
  background-color: rgb(255 255 255 / 80%);
  padding: 20px;
  border: 1px solid transparent;
  width: 50%;
  border-radius: 10px;
`;

const ItemContainer = styled.li`
    list-style-type: none;
    padding: 10px 10px 10px 20px;
    background-color: white;
    margin: 20px 0;
    display:flex;
    color: #387fd0;
    justify-content: space-between;
    border-radius: 5px;
`;

const ListContainer =styled.ul`
  padding: 0;
  margin: 20px 0;
`;

const Form = styled.form`
  display: flex;
  border: 3px solid #387fd0;
  border-radius: 5px;
`;

const InputForm = styled.input`
    width: 100%;
    font-size:18px;
    height: 50px;
    padding: 0px 15px;
    outline: none;
    ::placeholder {
      padding:5px;
   }
`;

const ButtonItem = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    color: #3a7bd5;
    display: inline-flex;
    align-items: center;
`;

const ModalConteiner = styled.div`
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100%;
  overflow: auto; 
  background-image: linear-gradient(to right, #3980d7 , #39cefc);
`;

const ButtonForm = styled.button`
	background-color: #387fd0;
  border: none;
  width: auto;
  float:right;
  padding: 0 15px;
`;

const DivButtons = styled.div`
  border: none;

`;

const defaultList = [
  { task: "learn Redux", finished: false },
  { task: "learn Typescript", finished: false },
  { task: "learn React", finished: true }
  ];

function App() {
    
    const [item, setItem] = useState('');
    const [list, setList] = useState(defaultList);

    function toogleStatusItem(position: number , status: boolean){
      const newArray = [...list];    
      newArray[position].finished = status;
      setList(newArray);
    }

    function removeItem (position: number){
      const newArray = [...list]
      .filter((item , index) => index !== position);
      setList(newArray);
    }

    return (
      <ModalConteiner>
        <ModalContent>
            <Form
                onSubmit={event => {
                    event.preventDefault();
                    const listItem = {task: item, finished: false};
                    if (!!listItem) {
                      setList([...list, listItem]);
                      setItem("");
                    }
                }}
            >
                <InputForm
                    type="text"
                    value={item}
                    placeholder="Add a task here..."
                    onChange={
                        event => setItem(event.target.value)
                    }
                />
                <ButtonForm type="submit"><FaPlus style={{ color: "white", fontSize: "24px" }}/></ButtonForm>
            </Form>
            <ListContainer style={{borderBottom:"2px solid rgb(58, 123, 213, .2)"}}>
              {list.map((item, index) => {
                if(!item.finished){
                  return (
                    <ItemContainer key={index}>
                      <span style={{ display:"flex" , alignItems:"center" , fontWeight:500}}>{item.task}</span>
                      <DivButtons>
                        <ButtonItem onClick={() => toogleStatusItem(index,true)}><FaCheck style={{ background: "#d6e4fd", padding: "5px" , borderRadius:"20px" }}/></ButtonItem>
                        <ButtonItem onClick={() => removeItem(index)}>
                          <FaTimes style={{ background: "#d6e4fd", padding: "5px" , borderRadius:"20px" }}/>
                        </ButtonItem>
                      </DivButtons>
                    </ItemContainer>
                  )
                }
                return null
              })}
            </ListContainer>
            <ListContainer>
              {list.map((item, index) => {
                if(item.finished){
                  return (
                    <ItemContainer style={{ backgroundColor:"#3a7bd5" , color:"white", fontWeight:500}} key={index}>
                      <span style={{ display:"flex" , alignItems:"center"}}>{item.task}</span>
                      <ButtonItem onClick={() => toogleStatusItem(index,false)}><FaCheck style={{ background: "white", padding: "5px" , borderRadius:"20px" }}/></ButtonItem>
                    </ItemContainer>
                  )
                }
                return null
              })}
            </ListContainer>
        </ModalContent>
      </ModalConteiner>
    );
};

export default App;
