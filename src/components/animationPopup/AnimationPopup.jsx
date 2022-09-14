import React from 'react'
import style from './AnimationPopup.module.css'
import Recipe from '../recipe/Recipe';


const AnimationPopup = (props) => {

    return (props.trigger) ? (
        <>
            <div className={style.popup}>
                <p className={style.pAnimation} onClick={() => props.setTrigger(false)}>X</p>
                <div className={style.divAnimation}>
                    <Recipe id={props.id} />
                </div>
            </div>
        </>
    ) : '';
}

export default AnimationPopup