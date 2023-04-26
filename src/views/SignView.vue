<template>
    <div>
        
        <transition name="fade">
         <img v-if="showLogo" src="../assets/logo.jpg" alt="Logo">
        </transition>
      <Sign />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Sign from '@/components/Sign.vue';

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
  width: 180px; 
  height: auto; 
  margin-left: 10%;
}
  </style>