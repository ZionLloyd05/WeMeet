import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Activity } from './../../../app/layout/models/activity';
import ActivityCard from './common/ActivityCard';
import ActivityList from './ActivityList';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Row>
        <Col lg={7} sm={12}>
          <ActivityList activities={activities} />
        </Col>
        <Col lg={5} sm={12}></Col>
      </Row>
    </Container>
  );
}
