<template>
  <div id="customer" class="customer view">
    <h1>Customer List</h1>
    <div class="searchbar">
      <SearchBar @searched="handleSearch($event)" />
    </div>
    <div class="infogrid">
      <InfoGrid :showInfo="infoFiltered" />
    </div>
  </div>
</template>

<script>
import InfoGrid from "../components/InfoGrid.vue";
import SearchBar from "../components/SearchBar.vue";
import { reactive, ref, watch, watchEffect, computed } from "vue";

export default {
  components: { InfoGrid, SearchBar },
  setup() {
    // fetch data
    let infocards = ref([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (infocards.value = data))
      .catch((err) => console.log(err.message));

    //get emit event from searchBar
    let searchInfo = ref("");

    const handleSearch = (e) => {
      return (searchInfo.value = e);
    };

    // filter data
    const infoFiltered = ref({});

    watchEffect(() => {
      infoFiltered.value = infocards.value.filter((info) =>
        info.name.toLowerCase().includes(searchInfo.value.toLowerCase())
      );
    });

    return { handleSearch, infoFiltered };
  },
};
</script>

<style>
.customer {
  transition: margin-left 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.customer.change {
  margin-left: 300px;
}
.customer h1 {
  margin: 2rem 0 2rem 0;
}
</style>
