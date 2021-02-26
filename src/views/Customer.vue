<template>
  <div id="customer" class="customer view">
    <h1>Customer List</h1>
    <div class="searchbar">
      <SearchBar />
    </div>
    <div class="infogrid">
      <InfoGrid />
    </div>
  </div>
</template>

<script>
import InfoGrid from "../components/InfoGrid.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { InfoGrid, SearchBar },
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