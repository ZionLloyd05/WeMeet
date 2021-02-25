import * as React from 'react';
import { Activity } from '../../../../app/layout/models/activity';
import { Card, Button } from 'react-bootstrap';

interface Props {
  activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <small>{activity.date}</small>
        <Card.Text>{activity.description}</Card.Text>
        <Card.Text>
          {activity.city}, {activity.venue}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
