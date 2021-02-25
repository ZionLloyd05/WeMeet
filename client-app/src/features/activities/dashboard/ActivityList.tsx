import * as React from 'react';
import { Fragment } from 'react';
import { Activity } from './../../../app/layout/models/activity';
import ActivityCard from './common/ActivityCard';

interface Props {
  activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
  return (
    <Fragment>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </Fragment>
  );
}
