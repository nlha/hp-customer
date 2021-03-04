<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <div class="infocard" v-for="info in showInfo" :key="info.id">
        <InfoCard
          :infoName="info.name"
          :infoAddress="info.address.city"
          :infoPhone="info.phone"
          @infoClicked="handleInfoClicked($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import { ref, computed, watch, watchEffect } from "vue";

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
      emit('infoClicked', e)
    }
    return { handleInfoClicked };
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
</style>
