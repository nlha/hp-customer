<template>
  <div id="home" class="home view">
    <h1>HoangPhuc Autogate Customers Management</h1>
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "Home",
  components: { Login },
};
</script>

<style>
.home {
  transition: margin-left 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.home.change {
  margin-left: 300px;
}
.home h1 {
  margin: 4rem 0 6rem 0;
}
</style>
