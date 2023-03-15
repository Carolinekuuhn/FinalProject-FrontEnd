import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {


  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Carousel 1.avif"
            alt="First slide - img different together"
          />
          <Carousel.Caption>
            <h1> Caring Communities</h1>
            <p>
              Welcome to our charity website, where you can make a difference
              and help those in need. We offer a variety of charitable options
              to choose from, so you can find the cause that speaks to your
              heart. Our mission is to create a world where everyone has access
              to basic necessities, equal opportunities, and a better quality of
              life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>
              We believe that every act of kindness and generosity can make a
              significant impact, and that's why we offer various ways for you
              to contribute, including donations or volunteering. Whether you
              want to donate money to support a particular project, give your
              time to help with a local initiative.{" "}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>
              We are grateful for your interest in helping the community, and we
              hope that you'll find an opportunity to get involved and make a
              positive impact on the lives of those who need it most.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 id="title-header">
              Together, we can build a brighter future for everyone.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="Card-section">
        <div className="Card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Animal Card.jpg" />
            <Card.Body>
              <Card.Title> Animals </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Dark</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/ambiente card.jpg" />
            <Card.Body>
              <Card.Title> Ambient </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Dark</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Idosos card.jpg" />
            <Card.Body>
              <Card.Title> Elderly </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Dark</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Woman card.jpg" />
            <Card.Body>
              <Card.Title> Woman's </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Dark</Button>
            </Card.Body>
          </Card>
        </div>
      </section>

      <footer className="content-footer">
        <div className="footer-about">
          <h3>Contact Us</h3>
          <ul>
            <li>123 Main Street, Anytown USA</li>
            <li>(555) 555-1234</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
