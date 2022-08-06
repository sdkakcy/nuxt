import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules'
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, rules[rule])
})

function changeLocale(newLocale) {
  import(`vee-validate/dist/locale/${newLocale}.json`).then((locale) => {
    localize(newLocale, locale)
  })
}

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

export default function ({ app }) {
  changeLocale(app.i18n.locale)

  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    changeLocale(newLocale)
  }
}
