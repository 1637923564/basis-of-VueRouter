<template>
  <div class="home">
    <h1>HOME</h1>
    <h2>{{ myName }}</h2>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      myName: "The home of this page!!!"
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
