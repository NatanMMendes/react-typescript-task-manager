
import React, { useState } from 'react';
import styled from 'styled-components';
import {FaCheckCircle, FaPlus, FaTimesCircle} from 'react-icons/fa';

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
  border-radius: 10px;

`;

const ModalConteiner = styled.div`
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-image: linear-gradient(to right, #3980d7 , #39cefc);
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
            <form
                onSubmit={event => {
                    event.preventDefault();
                    const listItem = {task: item, finished: false};
                    if (!!listItem) {
                      setList([...list, listItem]);
                      setItem("");
                    }
                }}
            >
                <input
                    type="text"
                    value={item}
                    placeholder="Add a task here..."
                    onChange={
                        event => setItem(event.target.value)
                    }
                />
                <button type="submit"><FaPlus/></button>
            </form>
            <ul>
              {list.map((item, index) => {
                if(!item.finished){
                  return (
                    <li key={index}>
                      <span>{item.task}</span>
                      <button onClick={() => toogleStatusItem(index,true)}><FaCheckCircle/></button>
                      <button onClick={() => removeItem(index)}><FaTimesCircle/></button>
                    </li>
                  )
                }
                return null
              })}
            </ul>
            <ul>
              {list.map((item, index) => {
                if(item.finished){
                  return (
                    <li key={index}>
                      <span>{item.task}</span>
                      <button onClick={() => toogleStatusItem(index,false)}><FaCheckCircle/></button>
                    </li>
                  )
                }
                return null
              })}
            </ul>
        </ModalContent>
      </ModalConteiner>
    );
};

export default App;
