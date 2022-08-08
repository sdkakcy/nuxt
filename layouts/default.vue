<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item router exact to="/admin/profile">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ $auth.user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(item.title)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="changeVariant()">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-2" v-text="appTitle" />
      <v-spacer />
      <ThemeColorSwitcher />
      <LangSwitcher />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import menuItems from '@/lib/menu'
import LangSwitcher from '@/components/LangSwitcher.vue'
import ThemeColorSwitcher from '@/components/ThemeColorSwitcher.vue'
export default {
  name: 'DefaultLayout',
  components: { LangSwitcher, ThemeColorSwitcher },
  data() {
    return {
      drawer: false,
      fixed: false,
      miniVariant: this.$cookies.get('miniVariant'),
    }
  },
  computed: {
    appTitle() {
      return this.$store.getters.appTitle
    },
    items() {
      return menuItems
    },
  },
  beforeCreate() {
    this.$vuetify.theme.dark = this.$cookies.get('dark')
  },
  methods: {
    changeVariant() {
      this.miniVariant = !this.miniVariant
      this.$cookies.set('miniVariant', this.miniVariant)
    },
  },
}
</script>
