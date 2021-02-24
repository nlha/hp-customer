<template>
  <div id="maintenance" class="maintenance view">
    <h1>Maintenance</h1>
  </div>
</template>

<script>
export default {
  name: 'Maintenance'
}
</script>

<style>
.maintenance {
  transition: margin-left .3s;
}
.maintenance.change {
  margin-left: 300px;
}
.maintenance h1 {
  margin: 2rem 0 4rem 0;
}
</style>