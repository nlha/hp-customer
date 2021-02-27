<template>
  <div id="customer" class="customer view">
    <h1>Customer List</h1>
    <div class="searchbar">
      <SearchBar @searched="handleSearch($event)"/>
    </div>
    <div class="infogrid">
      <InfoGrid :infoTyped="searchInfo" />
    </div>
  </div>
</template>

<script>
import InfoGrid from "../components/InfoGrid.vue";
import SearchBar from "../components/SearchBar.vue";
import { ref, reactive } from "vue";

export default {
  components: { InfoGrid, SearchBar },
  setup() {
    let searchInfo = reactive("");

    const handleSearch = (e) => {
      searchInfo = e.value;
      console.log(searchInfo)
    };

    return { searchInfo, handleSearch };
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
