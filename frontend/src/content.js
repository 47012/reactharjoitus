import React from 'react';
import kuva1 from './images/man.jpg';
import './content.css';
import AddDataForm from './add_data_db.js';

function Content({ updateContent }) {
  const handleButtonClick = (newContent) => {
    updateContent(newContent);
  };

  const halytys = () => {
    alert('TOSI HIANO HÄLYTYSfi!');
  };


  

  return (
    <div>
      {/* Buttons to change the content */}
      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick(
          <div className="sisaltoDiv">
            <div className="tekstiDiv">
              <p>
                Henkilö X
              </p>
            </div>
            <div className="kuvaDiv">
              <img
                className="kuva1"
                src={kuva1}
                alt="Henkilö X"
              />
            </div>
          </div>
        )}>
          Meistä
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            <p>This is the content for Yhteystiedot.</p>
          </div>
        )}>
          Yhteystiedot
        </button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            <p>Main contect.</p>
          </div>
        )}>
          Etusivu
        </button>

        <button onClick={halytys} className="button">Alert nappi.</button>

        <button className="button" onClick={() => handleButtonClick(
          <div>
            <AddDataForm />
          </div>
        )}>
          Database testi
        </button>


      </div>
    </div>
  );
}

export default Content;
