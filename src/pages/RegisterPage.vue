<template>
  <div class="page-wrapper">
    <form @submit.prevent="registerUser">
      <h1>Register now!</h1>
      <div class="form-group">
        <label for="email">email </label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      <div class="form-group">
        <label for="password">password </label>
        <input type="password" id="password" v-model="formData.password" />
      </div>

      <div class="actions">
        <button type="submit">Register!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser() {
      this.$store.dispatch("signup", this.formData);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  max-width: 1080px;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
}
h1 {
  font-family: var(--font-play);
  font-weight: normal;
}
form {
  margin: 0 auto;
  min-width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  font-size: 1.3rem;
  font-family: var(--font-mont);
  margin-bottom: 5px;
}

input {
  outline: none;
  color: var(--color-black);
  padding: 0.5rem 0.5rem;
  width: 350px;
  font-size: 1.3rem;
  border: 1px solid var(--color-grey);
  border-radius: 7px;
}
input:active,
input:focus {
  border: 1px solid var(--color-blue-hover);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.129);
}
.actions {
  margin: 1rem 0;
}
a {
  color: var(--color-grey);
  text-decoration: none;
  font-family: var(--font-mont);
  margin-left: 1.3rem;
}
button {
  font-family: var(--font-mont);
  color: var(--color-white);
  font-size: 1.3rem;
  letter-spacing: -0.3px;
  background-color: var(--color-blue);
  border-radius: 10px;
  border: 0;
  padding: 0.5rem 2rem;
  transition: all 0.2s;
}
button:hover {
  transform: scale(1.02);
  background-color: var(--color-blue-hover);
}
button:active {
  transform: scale(0.99);
  background-color: var(--color-blue-hover);
  opacity: 0.7;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.342);
}
@media only screen and (max-width: 420px) {
  input {
    width: 90%;
  }
}
@media only screen and (max-width: 310px) {
  input {
    width: 270px;
  }
  form {
    padding: 0 10px;
    align-items: center;
  }
  .form-group {
    align-items: center;
    padding: 0 10px;
  }
  label {
    align-self: flex-start;
  }
}
</style>
