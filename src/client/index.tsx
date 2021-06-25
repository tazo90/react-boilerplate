import React from 'react';
import { render } from 'react-dom';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import '@/styles/index.scss';

import App from '@/containers/App';
import { messages as messagesEN } from '@/locales/en/messages';
import { messages as messagesPL } from '@/locales/pl/messages';

i18n.load({
  en: messagesEN,
  pl: messagesPL,
});
i18n.activate('en');

render(
  <I18nProvider i18n={i18n}>
    <App />
  </I18nProvider>,
  document.getElementById('root')
);
