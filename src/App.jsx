import React from 'react';
import Portfolio from './components/Portfolio/portfolio';
import user from 'components/Portfolio/user';

import Statistics from "./components/Statistics/Statistics";
import data from './components/Statistics/data'
export const App = () => {
  return (
    <div>
      React homework template
      <Portfolio
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      
    </div>
  );
};
