<template>
  <div class="infocard-wrap">
    <div class="infocard-container">
      <div class="info-img">{{ shortName }}</div>
      <div class="info-name">{{ infoName }}</div>
      <div class="info-address">{{ infoAddress }}</div>
      <div class="info-phone">{{ infoPhone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["infoName", "infoAddress", "infoPhone"],
  setup(props) {
    let shortName = props.infoName
      .split(" ")
      .map((word) => word.slice(0, 1))
      .join("");

    return { shortName };
  },
};
</script>

<style>
.infocard-container {
  padding: 1rem;
  margin: 1.5rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: white;
}
.info-img {
  color: #d7aa5b;
  background-color: #881d1d;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
}
.info-name {
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  width: 100%;
  font-weight: bold;
}
</style>
