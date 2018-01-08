import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Image } from 'semantic-ui-react';
import image1 from '../assets/img/1.png';
import image2 from '../assets/img/2.png';
import image3 from '../assets/img/3.png';

const SectionServices = () =>
  <section className="services">
    <div className="overlay"></div>
    <Container>
      <Header as='h2' textAlign='center' className="section-header">
        სერვისები
        <div className="headline"></div>
      </Header>
      <Grid stackable columns={3}>
        <Grid.Column className="wow fadeInUp" data-wow-duration="1s">
          <Segment basic textAlign='center'>
            <Image src={image1} centered />
            <Header as='h4'>კომპიუტერების შეკეთება</Header>
            <p>კომპიუტერების შეკეთება კომპიუტერების შეკეთება კომპიუტერების შეკეთება</p>
          </Segment>
        </Grid.Column>
        <Grid.Column className="wow fadeInUp" data-wow-duration="1s">
          <Segment basic textAlign='center'>
            <Image src={image2} centered />
            <Header as='h4'>კომპიუტერების შეკეთება</Header>
            <p>კომპიუტერების შეკეთება კომპიუტერების შეკეთება კომპიუტერების შეკეთება</p>
          </Segment>
        </Grid.Column>
        <Grid.Column className="wow fadeInUp" data-wow-duration="1s">
          <Segment basic textAlign='center'>
            <Image src={image3} style={{height: '60px', width: '75px'}} centered />
            <Header as='h4'>კომპიუტერების შეკეთება</Header>
            <p>კომპიუტერების შეკეთება კომპიუტერების შეკეთება კომპიუტერების შეკეთება</p>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </section>

export default SectionServices;
