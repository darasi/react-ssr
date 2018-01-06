import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

const SectionContact = () =>
  <section className="contact">
    <div className="overlay"></div>
    <Container>
      <Header as='h2' textAlign='center' className="section-header">
        კონტაქტი
        <div className="headline"></div>
      </Header>
    </Container>
  </section>

export default SectionContact;
