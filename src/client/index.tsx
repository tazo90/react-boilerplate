import React from 'react';
import { render } from 'react-dom';
import { i18n as lingui } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import '@/styles/index.scss';

import App from '@/containers/App';
import i18n from '@/i18n';

i18n.load();
i18n.setLanguage('en');

render(
  <I18nProvider i18n={lingui}>
    <App />
  </I18nProvider>,
  document.getElementById('root')
);
