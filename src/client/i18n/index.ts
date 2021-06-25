import { i18n as lingui } from '@lingui/core';

import { messages as messagesEN } from '@/i18n/locales/en/messages';
import { messages as messagesPL } from '@/i18n/locales/pl/messages';

function load() {
  lingui.load({
    en: messagesEN,
    pl: messagesPL,
  });
}

function setLanguage(langCode: string) {
  lingui.activate(langCode);
}

export default {
  load,
  setLanguage,
};
