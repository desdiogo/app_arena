import { createI18n } from 'vue-i18n'
import ptBR from '../lang/pt_BR/pt_BR.json'

export const i18n = createI18n({
  locale: 'pt-BR',
  fallbackLocale: 'pt-BR',
  messages: {
    'pt-BR': ptBR
  }
})
