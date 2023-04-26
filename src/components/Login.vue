<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control form-control-lg" id="email" v-model="email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control form-control-lg" id="password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block" @click.prevent="login">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import type { Client } from '@/models/client';
  
  const client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    tel: '',
    birthday: new Date(),
    passportNumber: '',
    password: '',
    confirmPassword:''
  };
  
  const email = ref('');
  const password = ref('');
  
  function login() {
    // Effectuer l'action de connexion avec les informations d'identification
    console.log('Login with', email.value, password.value);
  }
  
  email.value = client.email;
  password.value = client.password;
  </script>
  
  <style scoped>
 .container {
  margin-top: 20px;
}

/* Ajuster la taille des inputs */
.form-control {
  width: 100%;
}

/* Ajuster la taille du bouton */
.btn-primary {
  width: 100%;
}


  </style>
  