<template>
    <div>
        
        <transition name="fade">
         <img v-if="showLogo" src="../assets/logo.jpg" alt="Logo">
        </transition>
      <Login />
      <router-link to="/Sign"><p>S'inscrire</p></router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Login from '@/components/Login.vue';

  const showLogo = ref(true);
  </script>
  <style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 2;
}
img {
  width: 200px; 
  height: auto; 
  margin-left: 10%;
}
p{
  margin-left: 48%;
  
  
}
  </style>