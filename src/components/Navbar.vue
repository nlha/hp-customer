<template>
  <div class="navbar-wrap">
    <div class="navbar-container">
      <!-- on/off menu btn -->
      <div class="hamburger-menu" @click="toggleHamburger">
        <!-- <div class="extend"><i class="fas fa-bars"></i></div>
        <div class="minimize"><i class="fas fa-times-circle"></i></div> -->
        <div class="hamburger-bar bar1"></div>
        <div class="hamburger-bar bar2"></div>
        <div class="hamburger-bar bar3"></div>
      </div>

      <!-- router-links -->
      <div class="nav-links">
        <div class="nav-link home">
          <router-link to="/">
            <div class="home-icon"><i class="fas fa-home"></i></div>
            <span class="menu-extend">Home</span>
          </router-link>
        </div>

        <div class="nav-link customer-list">
          <router-link to="/customer">
            <div class="customer-icon"><i class="fas fa-user-friends"></i></div>
            <span class="menu-extend">Customer</span>
          </router-link>
        </div>

        <div class="nav-link maintenance-list">
          <router-link to="/maintenance">
            <div class="tools-icon"><i class="fas fa-tools"></i></div>
            <span class="menu-extend">Maintenance</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleHamburger() {
      let menu = document.querySelector(".hamburger-menu");
      let bars = document.querySelectorAll(".hamburger-bar");
      let menuExtends = document.querySelectorAll(".menu-extend");
      let routerView = document.querySelector('.router-view')

      routerView.classList.toggle('change');
      menu.classList.toggle("change");
      bars.forEach((bar) => {
        bar.classList.toggle("change");
      });
      menuExtends.forEach((extend) => {
        extend.classList.toggle("change");
      });
    },
  },
};
</script>

<style>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  color: #f6ecda;
  height: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
}

.hamburger-menu {
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: 0.4s;
  align-self: center;
  margin: 10px 0 20px 0;
}
.hamburger-menu:hover .hamburger-bar {
  background-color: #d7aa5b;
}
.hamburger-menu.change {
  left: 100px;
}
.bar1,
.bar2,
.bar3 {
  background-color: #f6ecda;
  width: 30px;
  height: 4px;
  transition: 0.4s;
  margin: 6px 0;
}
.bar1.change {
  -webkit-transform: rotate(-45deg) translate(-5px, 9px);
  transform: rotate(-45deg) translate(-5px, 9px);
}
.bar2.change {
  opacity: 0;
}
.bar3.change {
  -webkit-transform: rotate(45deg) translate(-5px, -9px);
  transform: rotate(45deg) translate(-5px, -9px);
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
}
.home-icon {
  padding: 0 1.5px;
}
.tools-icon {
  padding: 0 3px;
}
.nav-link {
  padding: 10px;
}
.nav-link a {
  font-weight: bold;
  text-decoration: none;
  color: #f6ecda;
  display: flex;
  justify-content: flex-start;
}
.nav-link a.router-link-exact-active {
  color: #d7aa5b;
}
.nav-link a span {
  padding: 0 60px 0 10px;
}
.nav-link a.router-link-exact-active span {
  color: rgba(255, 255, 255, 0.1);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2e2424),
    to(#2e2424),
    color-stop(0.5, #d7aa5b)
  );
  background: -moz-gradient(
    linear,
    left top,
    right top,
    from(#2e2424),
    to(#2e2424),
    color-stop(0.5, #d7aa5b)
  );
  background: gradient(
    linear,
    left top,
    right top,
    from(#2e2424),
    to(#2e2424),
    color-stop(0.5, #d7aa5b)
  );
  -webkit-background-size: 50px 100%;
  -moz-background-size: 50px 100%;
  background-size: 50px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: shimmer;
  -moz-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #2e2424;
}

.menu-extend {
  margin-left: 10px;
  display: none;
}
.menu-extend.change {
  display: block;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@-moz-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-webkit-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-o-keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
</style>
