import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Activity } from './models/activity';
import {} from '@material-ui/core';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => {
        console.log(response);

        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <ActivityDashboard activities={activities} />
    </div>
  );
}

export default App;
