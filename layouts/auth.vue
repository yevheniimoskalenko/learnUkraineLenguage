<template>
  <el-container>
    <el-main>
      <div class="auth">
        <nuxt />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Auth'
}
</script>
<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
