import React from 'react'
import ButtonComponent from './ButtonComponent'
import Arrow from '../assets/icon/Arrow'

function PersonalChart() {
    return (
        <div className="personal-chart-head five-backgroundcolour">
            <h2>Sign up now so your selected item are saved to your personal cart.</h2>
            <div className="personal-email-broder">
                <div div className='email-inner-broder'>
                    <input className='input-focous-remove' type="email" name="" id="" placeholder="Enter your email"/>
                </div>
                <ButtonComponent
                    customClass="btn-charthead first-button-background-colour"
                    label={
                        <>
                            Sign up now
                            <Arrow />
                        </>
                    }
                    width={"221px"}
                    height={"48px"}
                />
            </div>
        </div>
    )
}

export default PersonalChart