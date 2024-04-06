import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Star} from 'react-feather';

export default function ContainerPage(props){
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/comp');
  };

    return(
      <div>
        <div className='container'>
          <img src=".\assets\topgame.png" />
          <div className='Name'>
            <h1>{props.Name}</h1>
            <p>{props.Price}</p>
          </div>
          <p>{props.Place}</p>
          <div className='buttons'>
            <div>
              <Star /> <Star /> <Star /> <Star /> <Star className='gray' />
            </div>
            <button onClick={handleButtonClick}>Забронировать</button>
          </div>
        </div>
      </div>
    )
  }

  