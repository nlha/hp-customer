<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <transition-group
        name="list"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        @after-leave="afterLeave"
        appear
      >
        <div
          class="infocard"
          v-for="(info, index) in showInfo"
          :key="info.id"
          :data-index="index"
        >
          <InfoCard
            :infoName="info.name"
            :infoAddress="info.address.city"
            :infoPhone="info.phone"
            @infoClicked="handleInfoClicked($event)"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import { ref, computed, watch, watchEffect } from "vue";
import gsap from "gsap";

export default {
  name: "InfoGrid",
  components: { InfoCard },
  props: {
    showInfo: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const handleInfoClicked = (e) => {
      emit("infoClicked", e);
    };

    const beforeEnter = (el) => {
      el.style.transform = "scale(0.8)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        scale: 1,
        opacity: 1,
        onComplete: done,
        delay: el.dataset.index * 0.1,
      });
    };
    const leave = (el, done) => {
      gsap.to(el, {
        duration: 0.3,
        scale: 0.8,
        onComplete: done,
      })
    }
    const afterLeave = (el) => {
      el.style.opacity = 0
    };

    return { handleInfoClicked, beforeEnter, enter, leave, afterLeave };
  },
};
</script>

<style>
.infogrid-container {
  width: 70vw;
  min-height: 70vh;
  background-color: #f6ecda;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.list-move {
  transition: all .3s ease;
}
.list-leave-active {
  position: absolute;
}
</style>
