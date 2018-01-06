import React, { Component } from 'react';
import { Container, Grid, Segment, Header } from 'semantic-ui-react';

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
          <Segment>
            SEGMENT
          </Segment>
        </Grid.Column>
        <Grid.Column className="wow fadeInUp" data-wow-duration="1s">
          <Segment>
            SEGMENT 2
          </Segment>
        </Grid.Column>
        <Grid.Column className="wow fadeInUp" data-wow-duration="1s">
          <Segment>
            SEGMENT 3
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </section>

export default SectionServices;
