<template>
  <div>
    <v-menu top :close-on-click="closeOnClick">
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">{{
          $t('Dil')
        }}</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="locale in availableLocales" :key="locale.code">
          <v-list-item-title
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            >{{ locale.name }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
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
