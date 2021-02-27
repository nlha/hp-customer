<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <div class="infocard" v-for="card in infocards" :key="card.id">
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
import SearchBar from "./SearchBar.vue";
import { ref, computed, watch } from "vue";

export default {
  name: "InfoGrid",
  components: { InfoCard, SearchBar },
  props: { infoTyped: String },
  setup(props) {
    let infocards = ref([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (infocards.value = data))
      .catch((err) => console.log(err.message));

    //// get searched info from customer
    let info = ref(props.infoTyped);
    watch(info, () => {
      console.log(info.value)
    })

    const infoFiltered = computed((info) => {
      return infocards.value.filter((e) => e.name.includes(info.value));
    });
    console.log(infoFiltered.value)

    return { infoFiltered, infocards };
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
