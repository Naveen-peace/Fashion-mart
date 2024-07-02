  import React, { useState } from 'react';
  import Close from '../assets/icon/close'
  import ThankYou from '../assets/image/thank-you.png'


  function PopupComponent(props) {
    const {
      text,
      label,
      lableone,
      image,
      buttonlable,
      buttontext,
      customClass,
      width,
      height,
      onClick
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
      setIsOpen(true);
    };

    const closePopup = () => {
      setIsOpen(false);
    };

    return (
      <section> 

        <div className="box">
          <button className="popup-button" onClick={openPopup}>{text}</button>
        </div> 

        {isOpen && (
          <div className="modal">
            <div className="popup-box">
            <div className={`content ${customClass}`} style={{ width, height }}>
              <img src={ThankYou} alt="" />
              <h1 className='six-textcolour'>{label}</h1>
              <p>{lableone}</p>
              <div className="close-popup-btn">
                <button className="close-button" onClick={closePopup}><Close/></button>
              </div>
              <div className="popup-btn-select">
                <button onClick={(e) => onClick(e)}  className="popup-btn-one third-text-colour">{buttonlable}</button>
              </div>
            </div>
            </div>
          </div>
        )}

      </section>
    );
  }

  export default PopupComponent;
