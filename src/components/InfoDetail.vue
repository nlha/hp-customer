<template>
  <div class="detail-wrapper">
    <div class="detail-close">
      <div class="close-btn" @click="handleClose">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="detail-container">
      <div class="profile-hero">
        <div class="hero-thumb">{{ shortName }}</div>
        <div class="hero-name">{{ heroName }}</div>
        <div class="hero-add">{{ heroAdd }}</div>
        <div class="hero-phone">{{ heroPhone }}</div>
      </div>
      <div class="profile-detail">
        <div class="profile-nav">
          <div
            class="nav-personal personal profile active"
            @click="toggleNav('personal')"
          >
            Personal Info
          </div>
          <div
            class="nav-project project profile"
            @click="toggleNav('project')"
          >
            Project Info
          </div>
        </div>
        <div class="profile-content">
          <div class="profile personal active">
            <form>
              <label for="">Name</label>
              <input type="text" id="profile-name" :value="heroName" readonly />
              <label for="">Address</label>
              <input
                type="text"
                id="profile-address"
                :value="heroAdd"
                readonly
              />
              <label for="">Phone Number</label>
              <input
                type="text"
                id="profile-phone"
                :value="heroPhone"
                readonly
              />
              <label for="">Age</label>
              <input type="text" id="profile-age" value="" readonly />
            </form>
          </div>
          <div class="profile project"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoDetail",
  props: {
    profile: Object,
  },
  setup(props, { emit }) {
    let heroName = props.profile.name;
    let heroAdd = props.profile.address.city;
    let heroPhone = props.profile.phone;

    let shortName = heroName
      .split(" ")
      .map((word) => word.slice(0, 1))
      .join("")
      .slice(-2);

    const handleClose = () => {
      emit("profileClose");
    };

    const toggleNav = (e) => {
      let nav = document.querySelectorAll(".profile");
      let active = document.querySelectorAll(`.${e}`);

      nav.forEach((select) => {
        select.classList.remove("active");
      });

      active.forEach((e) => {
        e.classList.toggle("active");
      });
    };

    return { heroPhone, heroName, heroAdd, shortName, handleClose, toggleNav };
  },
};
</script>

<style>
.detail-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
}
.detail-close {
  display: flex;
  justify-content: flex-end;
}
.close-btn {
  font-size: 3rem;
  font-weight: lighter;
  position: relative;
  top: 50px;
  right: 100px;
  color: white;
  cursor: pointer;
}
.detail-container {
  width: 70vw;
  height: 70vh;
  margin-left: 42px;
  background-color: #f6ecda;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
}
.profile-hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  padding: 5rem 2rem;
  border-right: 0.5rem dashed black;
}
.hero-thumb {
  color: #d7aa5b;
  background-color: #881d1d;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
}
.hero-name {
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
}

.profile-detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.profile-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-personal,
.nav-project {
  margin: 1rem 0.5rem 1rem 3rem;
  padding: 0 2px 3px 2px;
  font-size: 1.3rem;
  cursor: pointer;
}
.nav-personal.active,
.nav-project.active {
  padding: 0;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 3px solid #881d1d;
  color: #881d1d;
  font-weight: bold;
  transition: border-bottom ease-out 0.1s, font-weight ease-out 0.1s;
}

.profile-content {
  margin: 0 3rem;
}
.profile-content .profile {
  visibility: hidden;
  opacity: 0;
}
.profile-content .profile.active {
  visibility: visible;
  opacity: 1;
}
.profile form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.25rem;
}
.profile form label {
  margin: 2rem 0 0.25rem 0;
}
.profile form input {
  font-size: 1.25rem;
  width: 100%;
  outline: none;
  background: #f6ecda;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.25rem;
}
</style>
