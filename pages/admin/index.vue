<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: this.$t('Ana Sayfa'),
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
