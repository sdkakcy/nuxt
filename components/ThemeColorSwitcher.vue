<template>
  <v-btn icon @click="change()">
    <v-icon>{{
      $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2'
    }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeColorSwitcher',
  methods: {
    change() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$cookies.set('dark', this.$vuetify.theme.dark)
    },
  },
}
</script>
