import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 1.jpg"
            alt="First slide - img different together"
            id="carousel"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroulsel 2.jpg"
            alt="Second slide"
            id="carousel"
          />
          <Carousel.Caption>
            <h3 id="title-header"> </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 3.jpg"
            alt="Third slide"
            id="carousel"
          />
          <Carousel.Caption>
            <h3 id="title-header"> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 4.jpg"
            alt="Third slide"
            id="carousel"
          />
          <Carousel.Caption>
            <h3 id="title-header"> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 5.jpg"
            alt="Third slide"
            id="carousel"
          />
          <Carousel.Caption>
            <h3 id="title-header"> </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel6.jpg"
            alt="Third slide"
            id="carousel"
          />
          <Carousel.Caption>
            <h3 id="title-header"> </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="description">
        <img
          src="/images/logo2-removebg-preview.png"
          className="imgHome"
          style={{ width: "10rem" }}
        />
        <div className="textDescription">
          <p>
            <br />
            Welcome to our Caring Communities website, where you can make a difference and
            help those in need. We offer a variety of charitable options to
            choose from, so you can find the cause that speaks to your heart.
            Our mission is to create a world where everyone has access to basic
            necessities, equal opportunities, and a better quality of life. We
            believe that every act of kindness and generosity can make a
            significant impact, and that's why we offer various ways for you to
            contribute, including donations or volunteering. <br />
            <br /> Whether you want to donate money to support a particular
            project, give your time to help with a local initiative. We are
            grateful for your interest in helping the community, and we hope
            that you'll find an opportunity to get involved and make a positive
            impact on the lives of those who need it most. Together, we can
            build a brighter future for everyone.
          </p>
        </div>
      </Container>

      <section className="Card-section">
        <div className="Card">
          <Card className="cardtotal" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Animal Card.jpg" />
            <Card.Body>
              <Card.Title className="titleCard"> Animals </Card.Title>
              <Card.Text className="Card">
                Animal charities are organizations that work towards the welfare
                of animals. These charities are dedicated to rescuing,
                rehabilitating, and rehoming animals, including pets, farm
                animals, and wildlife. They also provide education and awareness
                about animal welfare, support animal-friendly legislation, and
                campaign against animal cruelty. Animal charities may also
                provide veterinary care, food, and shelter to animals in need.
                These organizations play a vital role in protecting and
                promoting the rights of animals.
              </Card.Text>
            </Card.Body>
            <Link className="nav-link" to={"/signup"}>
              <Button id="urgentcard" className="submitBtnHome">
                {" "}
                See all Charities{" "}
              </Button>
            </Link>
          </Card>
        </div>

        <div>
          <Card className="cardtotal" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/ambiente card.jpg" />
            <Card.Body>
              <Card.Title className="titleCard"> Environment </Card.Title>
              <Card.Text className="Card">
                Environmental charities focus on preserving and protecting the
                natural world, including air, water, land, and wildlife. These
                charities work to raise awareness about environmental issues,
                promote sustainable practices, and advocate for conservation and
                restoration efforts. Environmental charities may focus on issues
                such as climate change, pollution, deforestation, wildlife
                conservation, and ocean conservation. They also engage in
                research and education to promote long-term sustainability and
                the preservation of the environment.
              </Card.Text>
            </Card.Body>
            <Link className="nav-link" to={"/signup"}>
              <Button id="urgentcard" className="submitBtnHome">
                {" "}
                See all Charities{" "}
              </Button>
            </Link>
          </Card>
        </div>

        <div>
          <Card className="cardtotal" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Idosos card.jpg" />
            <Card.Body>
              <Card.Title className="titleCard"> Homeless </Card.Title>
              <Card.Text className="Card">
                Homeless charities work towards addressing homelessness and
                providing support to those who are homeless. These charities may
                provide shelter, food, and clothing to homeless individuals, as
                well as assistance with job training, education, and healthcare.
                Homeless charities may also provide outreach services to connect
                homeless individuals with resources and services in their
                community. These organizations play an important role in helping
                individuals experiencing homelessness transition to stable
                housing and a better quality of life.
              </Card.Text>
            </Card.Body>
            <Link className="nav-link" to={"/signup"}>
              <Button id="urgentcard" className="submitBtnHome">
                {" "}
                See all Charities{" "}
              </Button>
            </Link>
          </Card>
        </div>

        <div>
          <Card className="cardtotal" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/card.jpg" />
            <Card.Body>
              <Card.Title className="titleCard">Families & Children</Card.Title>
              <Card.Text className="Card">
                Family and children's charities are organizations that provide
                support, and resources to families and children. These charities
                focus on a variety of issues, including child welfare, adoption,
                foster care, parenting support, and family counseling. They also
                provide assistance with basic needs such as food, clothing, and
                shelter. These charities play a crucial role in helping families
                overcome difficult circumstances, providing them with the
                resources and support they need.
              </Card.Text>
            </Card.Body>
            <Link className="nav-link" to={"/signup"}>
              <Button id="urgentcard" className="submitBtnHome">
                {" "}
                See all Charities{" "}
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <footer className="content-footer">
        <div className="footer-about">
          <h3 className="title">Contact Us</h3>
          <ul>
            <li> 123 Rua das Flores, Lisbon - PT</li>
            <li>(+351) 969-123-456</li>
            <li>info@volunteering.com</li>
          </ul>
          <li>
            Developed by <strong>Caroline Kuhn</strong> &{" "}
            <strong>Vanessa Vieira</strong>
          </li>
        </div>
      </footer>
    </div>
  );
}

export default Home;
