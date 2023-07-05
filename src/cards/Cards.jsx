import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className='cards'>
            <div className='upper'>
                <div className='item4'>
                    <div className='name'>{props.name}</div>
                    <div className='email'>{props.email}</div>
                    <div className='website'>{props.website}</div>
                    <div className='gender'>gender</div>
                </div>
                <div className='image'><img src="" alt="" /></div>
            </div>
            <div className='lower'>Skills : </div>
        </div>
    )
}

export default Cards