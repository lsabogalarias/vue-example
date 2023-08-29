<template>
    <div v-for="(btn, index) in store.botones" :key="index" class="col-span-1 text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600">
        <div 
        :text-color="!store.isNumber(btn) ? 'white' : 'grey-8'"
        :color="!store.isNumber(btn) ? 'green' : 'grey-2'"
        @click="store.btnAccion(btn)"
        >
        {{ btn }}            
        </div> 
    </div>
</template>

<script setup>
// Importacion de Storage para administracion de estados de componentes
import { useCalculatorStore } from '../store/calculator.ts'

// Instancio el Storage
const store = useCalculatorStore()
</script>