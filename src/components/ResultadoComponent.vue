<!-- eslint-disable-next-line -->
<template>
    <div class="col-span-2 items-center ">
        <div class="text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600" 
             color="green" 
             @click="store.btnResultado()">
             =
        </div>
    </div>
</template>

<script setup>
import { useCalculatorStore } from '../store/calculator.ts'
const store = useCalculatorStore()

</script>  
  