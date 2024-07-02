import React from 'react'
import hero2 from '../assets/image/hero-2.png'
import ButtonComponent from './ButtonComponent'
import PlayRed from '../assets/icon/PlayRed'
import Arrow from '../assets/icon/Arrow'

function TrendyStyles() {
  return (
    <section>
        <div className="trendy-background five-backgroundcolour">
          <div className="trendy-sub-background-1">
            <div className="black-background"></div>
            <div className='img-after-trendy'></div>
            <div className="gray-brackground"></div>
            <div className="trendy-sub-background-2">
              <h2 className='first-text-colour'>Trendy Styles..</h2>
              <h3 className='first-text-colour'>Thousands styles More!</h3>
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="trendy-btn">
                <ButtonComponent
                  customClass="trendy-first-btn second-bordercolour first-button-background-colour"
                  label={
                    <>
                      <span className='third-text-colour'>Shop collections</span>
                      <Arrow />
                    </>
                  }
                  width={"177px"}
                  height={"40px"}
                />
                <ButtonComponent
                  customClass="trendy-second-btn first-text-colour second-bordercolour second-button-background-colour"
                  label={
                    <>
                      <PlayRed />
                      <span className='first-text-colour'>See How It Works</span>
                    </>
                  }
                  width={"172px"}
                  height={"34px"}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default TrendyStyles