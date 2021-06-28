import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';

// Lazy loading pages
const Home = lazy(() => import('../pages/Home'));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-center pt-12">
            <Spin></Spin>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}
