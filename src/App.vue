<template>
  <Navbar />
  <div class="router-view">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.router-view {
  transition: margin-left 0.3s;
  margin-left: 85px;
}
.router-view.change {
  margin-left: 310px;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}
.route-enter-active {
  transition: all .3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
.route-leave-active {
  transition: all .3s ease-in;
}
</style>
