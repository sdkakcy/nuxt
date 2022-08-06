<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ $t('Giriş Yap') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <LangSwitcher />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="email"
                v-model="login.email"
                prepend-icon="mdi-account"
                name="login"
                :label="$t('E-posta')"
                type="text"
              >
              </v-text-field>
              <v-text-field
                id="password"
                v-model="login.password"
                prepend-icon="mdi-lock"
                name="password"
                :label="$t('Şifre')"
                type="password"
              ></v-text-field>
              <v-checkbox
                v-model="login.remember"
                :label="$t('Beni hatırla')"
              ></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="auth()">{{ $t('Giriş') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher.vue'

export default {
  name: 'LoginPage',
  components: { LangSwitcher },
  layout: 'blank',
  data() {
    return {
      login: {
        email: '',
        password: '',
        remember: false,
      },
    }
  },
  head() {
    return {
      title: this.$t('Giriş Yap'),
    }
  },
  mounted() {},
  methods: {
    async auth() {
      try {
        const response = await this.$auth.loginWith('laravelSanctum', {
          data: this.login,
        })
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style></style>
