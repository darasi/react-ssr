import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import workstation from '../assets/img/workstation3.png';

const SectionHero = () =>
  <section className="hero">
    <div className="overlay"></div>
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Header as='h1' textAlign='left'>
            კომპიუტერული მომსახურება
          </Header>
          <Header as='h3' textAlign='left'>
            UCOMP.GE გთავაზობთ უმაღლესი ხარისხის კომპიუტერულ მომსახურებას საუკეთესო ფასად
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={workstation} centered />
        </Grid.Column>
      </Grid>
    </Container>
  </section>

export default SectionHero;
