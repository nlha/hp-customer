<template>
  <div id="customer" class="customer view">
    <h1>Customer List</h1>
    <div class="infogrid">
      <InfoGrid />
    </div>
  </div>
</template>

<script>
import InfoGrid from '../components/InfoGrid.vue'

export default {
  components: { InfoGrid }
}
</script>

<style>
.customer {
  transition: margin-left .3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.customer.change {
  margin-left: 300px;
}
.customer h1 {
  margin: 2rem 0 4rem 0;
}
</style>