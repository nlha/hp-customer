<template>
  <div id="customer" class="customer view">
    <h1>Customer List</h1>
    <div class="searchbar">
      <SearchBar @searched="handleSearch($event)" />
    </div>
    <div class="infogrid">
      <InfoGrid :showInfo="infoFiltered" @infoClicked="handleInfoClick($event)" />
    </div>
    <div class="infodetail" v-if="showProfile">
      <InfoDetail :profile="profileDetail" @profileClose="showProfile = false"/>
    </div>
  </div>
</template>

<script>
import InfoGrid from "../components/InfoGrid.vue";
import SearchBar from "../components/SearchBar.vue";
import InfoDetail from '../components/InfoDetail.vue';
import { reactive, ref, watch, watchEffect, computed } from "vue";

export default {
  components: { InfoGrid, SearchBar, InfoDetail },
  setup() {
    // fetch data
    let infocards = ref([]);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (infocards.value = data))
      .catch((err) => console.log(err.message));

    // get emit event from searchBar
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

    // get emit event from infocard clicked and show profile
    let profile = ref({})
    let showProfile = ref(false)
    const handleInfoClick = (e) => {
      profile.value = e
      showProfile.value = true
    }

    // get full profile info
    let profileDetail = ref({})
    watch(profile, (first) => {
      infocards.value.forEach(info => {
        if(info.name == first.infoName) {
          profileDetail.value = info
        }
      })
      //get object from proxy: JSON.parse(JSON.stringify(profileDetail.value))
    })

    return { handleSearch, infoFiltered, handleInfoClick, profileDetail, showProfile };
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
