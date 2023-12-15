<template>
  <div class="dashboard">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <SideBar />
    <div class="contant">
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
  },
};
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(6, 117, 6);
  height: 100vh;
  width: 100vw;
}
.contant {
  background-color: white;
  border-radius: 20px;
  margin: 5px 0px 0px 0;
}
</style>
