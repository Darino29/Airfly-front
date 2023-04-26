/*import { watchEffect, watch } from 'vue';
import type { Client } from '@/models/client';


export function setupEventHandlers(client: Client) {
  watchEffect(() => {
    if (client.password) {
      calculatePasswordSecurityLevel();
    } else {
      passwordSecurityLevel.value = '';
    }
  });

  watch(client.password, () => {
    if (client.confirmPassword) {
      validateFields();
    }
  });

  watch(client.confirmPassword, () => {
    if (client.confirmPassword) {
      validateFields();
    }
  });
}

function calculatePasswordSecurityLevel() {
  // Code pour calculer le niveau de sécurité du mot de passe
}

function validateFields() {
  // Code pour valider les champs de saisie
}*/
