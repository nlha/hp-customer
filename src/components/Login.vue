<template>
  <div class="login-wrap">
    <div class="login-container">
      <div class="login-logo">
        <img src="../assets/img/HP-logo.png" alt="HoangPhuc Autogate" />
      </div>
      <div class="login-form">
        <span>Login</span>
        <form action="" class="form-input">
          <label for="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />

          <label for="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login-container {
  margin: 2rem;
  background-color: rgba(243, 229, 206, 1);
  width: 60vw;
  height: 50vh;
  display: flex;
  box-shadow: 0 0 1px black, 1px 1px 3px black;
  justify-content: space-evenly;
}
.login-logo {
  align-self: center;
  color: #881d1d;
  text-shadow: 0 0 1px #d7aa5b;
  font-weight: bold;
  font-size: 2rem;
  padding: 2rem;
}
.login-logo img {
  width: 300px;
  background-position: center;
  background-size: cover;
}
.login-form {
  padding: 2rem;
  position: relative;
  width: 50%;
  height: 120%;
  background-color: #881d1d;
  bottom: 10%;
  box-shadow: 0 0 1px black, 1px 1px 3px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form span {
  color: #d7aa5b;
  font-size: 2rem;
}
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.form-input input {
  margin-top: 2.5rem;
  padding: 0.5rem;
  background-color: #881d1d;
  border: none;
  border-bottom: 1px solid #b29576;
  font-size: 1.5rem;
  color: #b29576;
  outline: none;
}
::placeholder {
  color: #b29576;
}
.form-input input[type="submit"] {
  margin-top: 3rem;
  border: none;
  align-self: center;
  background-color: #d7aa5b;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}
.form-input input:focus {
  border: none;
  border-bottom: 1px solid #d7aa5b;
  color: #d7aa5b;
}
</style>