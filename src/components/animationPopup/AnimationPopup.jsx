import React from 'react'
import './AnimationPopup.module.css'
import Recipe from '../recipe/Recipe';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AnimationPopup = (props) => {
    const navigation = useNavigate();
    return (props.trigger) ? (
        <>
            <div className="popup">
                <p onClick={() => props.setTrigger(false)}>X</p>
                <Recipe />
            </div>

        </>
    ) : '';
}

export default AnimationPopup