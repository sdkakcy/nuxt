<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <LangSwitcher />
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" label="Login" type="text">
                <v-icon slot="prepend">fas fa-lock</v-icon>
              </v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/">Login</v-btn>
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
}
</script>

<style></style>
