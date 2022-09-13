import React from 'react'
import style from'./AnimationPopup.module.css'
import Recipe from '../recipe/Recipe';
import { useState } from 'react'


const AnimationPopup = (props) => {

    return (props.trigger) ? (
        <>
            <div className={style.popup}>
                <p onClick={() => props.setTrigger(false)}>X</p>
                <Recipe id={props.id}/>
            </div>

        </>
    ) : '';
}

export default AnimationPopup