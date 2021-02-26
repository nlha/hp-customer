<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <div class="infocard" @searching="searchInfo($event)" v-for="card in infocards" :key="card.id">
        <InfoCard
          :infoName="card.name"
          :infoAddress="card.address.city"
          :infoPhone="card.phone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import SearchBar from './SearchBar.vue'
import { ref, computed } from "vue";

export default {
  name: "InfoGrid",
  components: { InfoCard, SearchBar },
  setup() {
    let infocards = ref([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (infocards.value = data))
      .catch((err) => console.log(err.message));

    const searchInfo = computed((e) => {
      console.log('searchInfo triggered')
      return infocards.value.filter(info => info.includes(e))
    })

    return { infocards, searchInfo };
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
.info-card {
}
</style>
