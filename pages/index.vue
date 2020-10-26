<template>
  <div class="auth">
    <h1>Правопис ненаголошених <i>е</i> та <i>и</i></h1>
    <div class="form">
      <el-form ref="form" :model="controller" class="form" :rules="rules">
        <el-form-item label="Пошта">
          <el-input v-model="controller.email"></el-input>
        </el-form-item>
        <el-form-item label="Ім'я">
          <el-input v-model="controller.name"></el-input>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input v-model="controller.pass" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" round :loading="loading" @click="auth"
          >Увійти</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      loading: false,
      controller: { email: '', pass: '', name: '' },
      rules: {}
    }
  },
  methods: {
    auth() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true

            const dataForm = {
              email: this.controller.email,
              name: this.controller.name,
              pass: this.controller.pass
            }
            await await this.$auth.loginWith('local', {
              data: dataForm
            })
            await this.$router.push('/panel')
          } catch (e) {}
        }
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  width: 300px;
}
.auth {
  h1 {
    text-align: center;
  }
}
</style>
