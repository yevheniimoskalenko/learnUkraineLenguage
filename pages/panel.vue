<template>
  <div>
    {{ this.$auth.$state }}
    <el-button @click="$auth.logout()"></el-button>
  </div>
</template>
<script>
export default {}
</script>
