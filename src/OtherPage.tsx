import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {};



const OtherPage = (props: Props) => {

  const history = useNavigate();

  const { id } = useParams();
  
  const handleClick = ()=>{
    history('/');
  }

  const showParams = ()=>{
    console.log(id);
  };

  return (
    <>
      <h1>
        Hello from other page
      </h1>
      <Button onClick={handleClick}>Go Back</Button>
      <Button onClick={showParams}>show params</Button>
    </>
  );
};

export default OtherPage;
