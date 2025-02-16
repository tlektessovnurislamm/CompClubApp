import React from 'react'
import './booking.css'
import {club} from './data'
import Booking from '../components/NumberComp';
import { ArrowLeft, Upload,Heart ,Star, Wind , Droplet , Wifi} from 'react-feather';

export default function BookingPage() {
  return (
    <section>
      <div>
        <div className='BackImg'>
          <div className='circle'>
            <ArrowLeft />
          </div>
          <div >
            <div className='circle'>
              <Upload />
            </div>
            <div className='circle'>
              <Heart />
            </div>
          </div>
        </div>
        <div className='info_card' >
          <div className='info'>
            <h1>{club[0].Name}</h1>
            <p>{club[0].Addres}</p>
            <Star /> <Star /> <Star /> <Star /> <Star className='gray' />
          </div>
          <button onClick={() => window.open(club[0].Website, "_blank")}>Карта</button>
        </div>
        <Booking />
        
      </div>
    </section>
  )
}