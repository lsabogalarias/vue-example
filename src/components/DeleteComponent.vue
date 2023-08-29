<template>
    <div class="col-span-2 items-center ">
        <div class="text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600"
            color="green"
            @click="store.btnReiniciar()"
        >
        DEL
        </div>
    </div>    
</template>    

<script setup>
// Importacion de Storage para administracion de estados de componentes
import { useCalculatorStore } from '../store/calculator.ts'

// Instancio el Storage
const store = useCalculatorStore()
</script>