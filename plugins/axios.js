export default function ({ app, $axios }) {
  $axios.onRequest((config) => {
    config.headers['X-Accept-Language'] = app.i18n.locale
  })
}
