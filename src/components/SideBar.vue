<template>
  <div class="SideBar">
    <div class="title">Simple sidebar</div>
    <div class="menu-items">
      <router-link to="/AboutView" active-class="active" class="side-btn">
        <div class="link-container">About</div>
      </router-link>
      <!-- <router-link to="/OverView" active-class="active" class="side-btn"> -->

      <router-link to="/ProfilView" active-class="active" class="side-btn">
        <div class="link-container">Profil</div>
      </router-link>
      <router-link to="/OverView" active-class="active" class="side-btn">
        <div class="link-container">Products</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
};
</script>
<style scoped>
.title {
  color: white;
  font-size: 25px;
  margin-top: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.menu-items > * {
  margin-top: 40px;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  background-color: rgb(6, 117, 6);
  color: white;
  background-color: white;
  color: rgb(6, 117, 6);
  font-weight: 50px;
}

.side-btn {
  background-color: white;
  text-decoration: none;
  border: none;
  padding: 10px 0px;
  cursor: pointer;
  font-size: 16px;
  color: rgb(6, 117, 6);
}
</style>
