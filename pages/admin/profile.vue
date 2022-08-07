<template>
  <div></div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      title: this.$t('Profil'),
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    this.$store.dispatch('setTitle', this.title)
  },
}
</script>

<style></style>
