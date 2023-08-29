<template>
    <div class="p-4 text-right shadow-2xl rounded-t-lg bg-white">
        <p class="font-semibold text-gray-700 h-6">{{ store.acumulador + store.actual }}</p>
        <p class="font-bold text-3xl text-gray-900 my-2">{{ store.resultado }}</p>
    </div>
</template>    
 
<script setup>
import { useCalculatorStore } from '../store/calculator.ts'
const store = useCalculatorStore()
</script>