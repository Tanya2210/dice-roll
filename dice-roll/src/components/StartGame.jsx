import React from 'react'
import './StartGame.css'

const StartGame = ({ toggle }) => {
  return (
    <div className='container'>
      <div>
        <img src="/images/dice_pic.jpg" alt='pic not coming'/>
      </div>
      <div className='rtside'>
        <h1>Dice Game</h1>
        <button className='playnow' onClick={toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame;
