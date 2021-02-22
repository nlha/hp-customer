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
</style>