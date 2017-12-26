import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const SectionServices = () =>
  <section className="services">
    <div className="overlay"></div>
    <Grid container stackable columns={3}>
      <Grid.Column>
        <Segment>
          SEGMENT
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          SEGMENT 2
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          SEGMENT 3
        </Segment>
      </Grid.Column>
    </Grid>
  </section>

export default SectionServices;
