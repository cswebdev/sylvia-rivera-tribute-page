import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/Header";
import "./MainStyles.css";

function Main() {
  return (
    <>
    <Header />
    <Container>
 
    <div className="main-img-container">
      <figure id="img-div">
        <img id="image" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3W3O3UPDMFGHHN6F4KAHOZGJYQ.jpg&w=916" alt="Sylvia Rivera and Marsha P Johnson marching at a rally" />
        <div id="image-quote">"we have to be visible."
        </div>
        <div id="img-caption">LGBTQ activists Sylvia Rivera (left) & Marsha P. Johnson (right)
        </div>
      </figure>
    </div>


    <div id="tribute-info">

      <div className="container-large">
        <div className="sub-header-container">

          <div className="header-box-small">
          </div>
          <h3 className="section-subtitle">
            Born This Way
          </h3>
        </div>
        <div className="info-box">
          <div className="info-text">
            <div className="flex-container">
              <div className="flex-item">
                <p>Sylvia was born in 1951 in New York City as Ray Rivera. From a young age Ray
                  displayed feminine behaviors and said they
                  were not like other <span className="emphasis">boys</span>.</p>

              </div>
              <div className="flex-item">
                <p>
                  Growing up was difficult for Ray and like the majority of queer youth at the
                  time,
                  he was disowned and homeless by the age of 11 for being themselves.
                </p>
              </div>
              <div className="flex-item">
                <p>
                  Abuse, drugs, and AIDS were serious issues that disproportionately affected
                  young
                  queer people at the time. Many children, like Ray, were forced to sell
                  themselves on the
                  streets.

                </p>
              </div>
              <div className="flex-item">
                <p>
                  Queer people had no support system. They had to take care of each other. Ray was
                  taken in and protected by the drag community and
                  given the
                  name, <span className="emphasis">Sylvia</span>.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div className="container-large">
      <div className="sub-header-container">
        <div className="header-box-small">
        </div>
        <h3 className="section-subtitle">Riot for Rights </h3>
      </div>

      <div className="info-box">
        <div className="info-text">
          <div className="flex-container">
            <div className="flex-item">
              <p>
                A violent police raid on June 28, 1969, started the gay rights movement.
                Known as the <span className="emphasis">Stonewall Riots</span>. A brave group of people
                fought back against police brutality.
              </p>

            </div>
            <div className="flex-item">
              <p>
                Sylvia Rivera and Marsha P. Johnson assisted in founding the <span className="emphasis">Gay
                  Liberation
                  Front </span> hours after Stonewall. The GLF organized numerous rallies and
                protests. It became a founding group for the gay rights movement.
              </p>
            </div>
            <div className="flex-item">
              <p>
                After the riots Sylvia helped develop the GLF and also co-founded the <span className="emphasis">Street Tranvestite Action
                  Revolutionaries
                  (STAR)</span> which offered services to queer and homeless youth.
              </p>
            </div>
            <div className="flex-item">
              <p>
                Sylvia helped the <span className="emphasis">Sexual Orientation Non-Discrimination
                  Act</span>
                in New York get passed.
                SONDA prohibits
                discrimination on the basis of sexual orientation in employment, housing, and other
                civil rights.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      <div id="tribute-wiki">For more information visit Sylvia Rivera's
        <a href="https://en.wikipedia.org/wiki/Sylvia_Rivera" id="tribute-link" target="_blank"> <button id="wiki-button">Wikipedia</button></a>
      </div>

    </div>

    </Container>
    </>
  );
}

export default Main;