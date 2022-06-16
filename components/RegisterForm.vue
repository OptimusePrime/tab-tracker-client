<template>
  <div class="register-form columns is-flex is-vcentered is-centered">
    <form action="" class="box">
      <h1 class="title">
        Register
      </h1>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" type="email" class="input email-input" placeholder="e.g. jane.doe@gmail.com">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" type="password" class="input" placeholder="*********">
        </div>
      </div>
      <button class="mt-3 button is-primary" @click="register">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  name: "RegisterForm",
  data () {
    return {
      email: "",
      password: ""
    };
  },
  mounted () {
  },
  methods: {
    register () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped lang="scss">
.register-form {
  height: 75vh;
}
</style>
