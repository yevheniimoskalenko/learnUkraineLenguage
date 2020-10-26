<template>
  <div></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      verefy: false,
      data: { email: '', password: '' },
      rules: {
        email: [
          { required: true, message: 'email is required' },
          { type: 'email', message: 'email is need valide' }
        ],
        password: [{ required: true, message: 'password is required' }]
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.img img {
  width: 200px;
}
.img {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.content {
  display: flex;
  justify-content: center;
}
</style>
