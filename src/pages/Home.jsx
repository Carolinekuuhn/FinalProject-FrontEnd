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
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/caroulsel 2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 id="title-header">Volunteer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 id="title-header">Volunteer</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Caroulsel 4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 id="title-header">Volunteer</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="description">
        <p>
          <h1 className="title"> Caring Communities</h1>
          Welcome to our charity website, where you can make a difference and
          help those in need. We offer a variety of charitable options to choose
          from, so you can find the cause that speaks to your heart. Our mission
          is to create a world where everyone has access to basic necessities,
          equal opportunities, and a better quality of life. We believe that
          every act of kindness and generosity can make a significant impact,
          and that's why we offer various ways for you to contribute, including
          donations or volunteering. Whether you want to donate money to support
          a particular project, give your time to help with a local initiative.
          We are grateful for your interest in helping the community, and we
          hope that you'll find an opportunity to get involved and make a
          positive impact on the lives of those who need it most. Together, we
          can build a brighter future for everyone.
        </p>
      </Container>

      <section className="Card-section">
        <div className="Card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Animal Card.jpg" />
            <Card.Body>
              <Card.Title> Animals </Card.Title>
              <Card.Text>
                Animal charities are organizations that work towards the welfare
                of animals. These charities are dedicated to rescuing,
                rehabilitating, and rehoming animals. They also provide campaign
                against animal cruelty, veterinary care, food, and shelter to
                animals in need.
              </Card.Text>
              <Link className="nav-link" to={"/signup"}>
                <Button className="submitBtn"> Check Charities</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/ambiente card.jpg" />
            <Card.Body>
              <Card.Title> Environment </Card.Title>
              <Card.Text>
                Environmental charities focus on preserving and protecting the
                natural world, including air, water, land, and wildlife. These
                charities work to raise awareness about environmental issues,
                promote sustainable practices, and advocate for conservation and
                restoration efforts.
              </Card.Text>
              <Link className="nav-link" to={"/signup"}>
                <Button className="submitBtn"> Check Charities</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/Idosos card.jpg" />
            <Card.Body>
              <Card.Title> Homeless </Card.Title>
              <Card.Text>
                Homeless charities work towards addressing homelessness and
                providing support to those who are homeless or at risk of
                homelessness. These charities may provide shelter, food, and
                clothing to homeless individuals, as well as assistance with job
                training, education, and healthcare. Homeless charities may also
                provide outreach services to connect homeless individuals with
                resources and services in their community.
              </Card.Text>
              <Link className="nav-link" to={"/signup"}>
                <Button className="submitBtn"> Check Charities</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/card.jpg" />
            <Card.Body>
              <Card.Title> Families & Children </Card.Title>
              <Card.Text>
                Family and children's charities are organizations that provide
                support, assistance, and resources to families and children in
                need. These charities may focus on a variety of issues,
                including child welfare, adoption, foster care, parenting
                support, and family counseling. They also provide assistance
                with basic needs such as food, clothing, and shelter.
              </Card.Text>
              <Link className="nav-link" to={"/signup"}>
                <Button className="submitBtn"> Check Charities</Button>
              </Link>
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
