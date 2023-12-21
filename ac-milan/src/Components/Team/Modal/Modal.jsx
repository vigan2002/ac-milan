import React from 'react'
import './modal.scss'

const Modal = (props) => {

    const {
        name, shirt, age, nat, image, foot, position,
        children ,closeModal, 
    } = props

    return (
        <div className='modal'>
            <div className="modal-wrapper">
                <div className='card-modal'>
                    <div className='info-modal'>
                        <img src={image} alt={name} />
                        <p>Name: <h2>{name}</h2>
                            <br />Position: <span>{position}</span>
                            <br />Age: <span>{age}</span>
                            <br />Nat: <span>{nat}</span>
                            <br />Foot: <span>{foot}</span>
                            <br />Nr: <span>{shirt}</span></p>
                            {children && children}
                        <button className='close' onClick={() => closeModal()}>close</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Modal