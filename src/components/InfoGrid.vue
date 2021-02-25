<template>
  <div class="infogrid-wrap">
    <div class="infogrid-container">
      <div class="infocard" v-for="card in infocards" :key="card.id">
        <InfoCard
          :infoName=card.name
          :infoAddress=card.address.city
          :infoPhone=card.phone
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  name: "InfoGrid",
  components: { InfoCard },
  data() {
    return {
      infocards: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    getData(callback) {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          callback(undefined, data);
        } else if (request.readyState === 4) {
          callback("could not fetch data", undefined);
        }
      });

      request.open("GET", "https://jsonplaceholder.typicode.com/users");
      request.send();
    },
    fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => this.infocards = data)
        .catch(err => console.log(err.message))
    }
  },
};
</script>

<style>
.infogrid-container {
  width: 70vw;
  min-height: 70vh;
  background-color: #f6ecda;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-evenly;
}
.info-card {
}
</style>
