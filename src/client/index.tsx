import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { i18n as lingui } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/index.scss';

import App from '@/containers/App';
import i18n from '@/i18n';

const history = createBrowserHistory();
const queryClient = new QueryClient();

i18n.load();
i18n.setLanguage('en');

render(
  <QueryClientProvider client={queryClient}>
    <I18nProvider i18n={lingui}>
      <Router history={history}>
        <App />
      </Router>
    </I18nProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
