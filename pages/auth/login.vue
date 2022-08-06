<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <ValidationObserver
          ref="loginValidation"
          v-slot="{ invalid, validated }"
        >
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ $t('Giriş Yap') }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <LangSwitcher />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="email"
                  :name="$t('E-posta')"
                  rules="required|email"
                >
                  <v-text-field
                    id="email"
                    v-model="login.email"
                    prepend-icon="mdi-account"
                    :error-messages="errors"
                    name="email"
                    :label="$t('E-posta')"
                    type="text"
                  >
                  </v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  :name="$t('Şifre')"
                  rules="required|min:8"
                >
                  <v-text-field
                    id="password"
                    v-model="login.password"
                    prepend-icon="mdi-lock"
                    :error-messages="errors"
                    name="password"
                    :label="$t('Şifre')"
                    type="password"
                  ></v-text-field>
                </ValidationProvider>
                <v-checkbox
                  v-model="login.remember"
                  :label="$t('Beni hatırla')"
                ></v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                :disabled="invalid || !validated"
                @click="auth()"
                >{{ $t('Giriş') }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </ValidationObserver>
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
  auth: 'guest',
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
        await this.$auth.loginWith('laravelSanctum', {
          data: this.login,
        })
      } catch (error) {
        if (error.response.status === 422) {
          this.$refs.loginValidation.setErrors(error.response.data.errors)
        }
      }
    },
  },
}
</script>

<style></style>
