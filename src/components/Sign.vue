<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Sign up
      </div>
      <div class="card-body">
        <form class="grid-form" @submit.prevent="signup">
          <div class="grid-form-item">
            <label for="firstName">First name</label>
            <input type="text" class="form-control form-control-lg" id="firstName" v-model="client.firstName">
          </div>
          <div class="grid-form-item">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control form-control-lg" id="lastName" v-model="client.lastName">
          </div>
          <div class="grid-form-item">
            <label for="address">Address</label>
            <input type="text" class="form-control form-control-lg" id="address" v-model="client.address">
          </div>
          <div class="grid-form-item">
            <label for="email">Email address</label>
            <input type="email" class="form-control form-control-lg" id="email" v-model="client.email">
          </div>
          <div class="grid-form-item">
            <label for="tel">Phone number</label>
            <input type="tel" class="form-control form-control-lg" id="tel" v-model="client.tel">
          </div>
          <div class="grid-form-item">
            <label for="birthday">Birthday</label>
            <input type="date" class="form-control form-control-lg" id="birthday" v-model="client.birthday">
          </div>
          <div class="grid-form-item">
            <label for="passportNumber">Passport number</label>
            <input type="text" class="form-control form-control-lg" id="passportNumber" v-model="client.passportNumber">
          </div>
          <div class="grid-form-item">
            <label for="password">Password</label>
            <input type="password" class="form-control form-control-lg" id="password" v-model="client.password">
          </div>
          <div class="grid-form-item">
            <label for="confirmPassword">Confirm password</label>
            <input type="password" class="form-control form-control-lg" id="confirmPassword" v-model="client.confirmPassword">
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign up</button>
        </form>
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
  confirmPassword: ''
};

const { firstName, lastName, address, email, tel, birthday, passportNumber, password ,confirmPassword} = client;
const passwordError = ref('');
const confirmPasswordError = ref('');
const passwordSecurityLevel = ref('');


function signup() {
  // Effectuer l'action d'inscription avec les informations du client
  console.log('Signup with', client);
}

function validateFields() {
  let valid = true;
  passwordError.value = '';
  confirmPasswordError.value = '';

  // Vérifier que tous les champs requis sont remplis
  if (!client.firstName || !client.lastName || !client.address || !client.email || !client.tel || !client.birthday || !client.passportNumber || !client.password || !client.confirmPassword) {
    valid = false;
    alert('Remplissez tous les champs.');
  }

  // Vérifier que les mots de passe correspondent
  if (client.password !== client.confirmPassword) {
    valid = false;
    passwordError.value = 'Mot de passe invalide.';
  }

  return valid;
}

function calculatePasswordSecurityLevel() {
  if (client.password.length < 6) {
    passwordSecurityLevel.value = 'Weak';
  } else if (client.password.length < 10) {
    passwordSecurityLevel.value = 'Medium';
  } else {
    passwordSecurityLevel.value = 'Strong';
  }
}

</script>

<style scoped>
.container {
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: -90px;
}

.card-body {
  display: flex;
  justify-content: center;
}

/* CSS grid layout */
.grid-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-form-item {
  display: flex;
  flex-direction: column;
}

/* Ajuster la taille des inputs */
.form-control {
  width: 100%;
  font-size: 14px;
}

/* Ajuster la taille du bouton */
.btn-primary {
  margin-top: 10px;
  margin-left: 60%;
  width: 80%;
  font-size: 14px;
}
</style>
