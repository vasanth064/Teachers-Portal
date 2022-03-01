import React from 'react';
import { Route, Switch } from 'react-router';
import './assets/css/App.css';
import StudentDashboard from './pages/StudentDashboard';
import TodaySchedule from './pages/TodaySchedule';
import StudentDashboardData from './data/StudentDashboardData';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/'>
          <StudentDashboard>
            <Route exact path='/StudentsDashBoard' component={TodaySchedule} />
            {StudentDashboardData.map((item) =>
              item.sidebar.navItems.map((item) =>
                item.subMenu.map((item, index) => (
                  <Route
                    exact
                    path={`/${item.URL}`}
                    key={index}
                    component={item.page}
                  />
                ))
              )
            )}
          </StudentDashboard>
        </Route>
      </Switch>
    </>
  );
};

export default App;
