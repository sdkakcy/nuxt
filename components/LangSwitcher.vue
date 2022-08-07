<template>
  <div>
    <v-menu
      :close-on-click="closeOnClick"
      transition="slide-y-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on"
          ><v-icon>mdi-translate</v-icon></v-btn
        >
      </template>

      <v-list>
        <v-list-item
          v-for="locale in availableLocales"
          :key="locale.code"
          nuxt
          :to="switchLocalePath(locale.code)"
        >
          <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data: () => ({
    closeOnClick: true,
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
