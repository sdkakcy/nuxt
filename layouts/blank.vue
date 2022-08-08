<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'BlankLayout',
  beforeCreate() {
    this.$vuetify.theme.dark = this.$cookies.get('dark')
  },
}
</script>

<style></style>
