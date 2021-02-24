<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <InfoCard
        infoName="Doe John"
        infoAddress="Vungtau Vietnam"
        infoPhone="+84 123456789"
      />
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  name: "InfoGrid",
  components: { InfoCard },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4) {
          console.log(request.responseText);
        }
        // console.log(request, request.readyState);
      });

      request.open("GET", "https://jsonplaceholder.typicode.com/users");
      request.send();
    },
  },
};
</script>

<style>
.infogrid-container {
  width: 70vw;
  min-height: 70vh;
  background-color: #f6ecda;
}
</style>
