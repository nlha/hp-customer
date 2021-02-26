<template>
  <div class="searchbar-wrap">
    <div class="searchbar-container">
      <input type="text" placeholder="Search something here">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .searchbar-container {
    width: 50vw;
    height: 50px;
    margin-bottom: 2rem;
  }
  .searchbar-container input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid black;
    color: #881d1d;
    font-size: 1.5rem;
    padding: 1rem;
    outline: none;
  }
  .searchbar-container input:focus {
    border: 1px solid black;
    color: #881d1d;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  }
  ::placeholder {
    color: #B29576;
  }
</style>