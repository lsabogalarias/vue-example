<!-- eslint-disable-next-line -->
<template>     
  <div class="h-screen bg-green-400 flex justify-center py-16">
    <div class="w-1/3">
      <div class="p-4 text-right shadow-2xl rounded-t-lg bg-white">
        <p class="font-semibold text-gray-700 h-6">{{ store.acumulador + store.actual }}</p>
        <p class="font-bold text-3xl text-gray-900 my-2">{{ store.resultado }}</p>
      </div>

      <div class="grid grid-cols-4 gap-4">        
        <div v-for="(btn, index) in botones" :key="index" class="col-span-1 text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600">
          <div 
            :text-color="!store.isNumber(btn) ? 'white' : 'grey-8'"
            :color="!store.isNumber(btn) ? 'green' : 'grey-2'"
            @click="store.btnAccion(btn)"
          >
            {{ btn }}            
          </div> 
        </div> 
          
        <div class="col-span-2 items-center ">
          <div
              class="text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600"
              color="green"
              @click="store.btnReiniciar()"
          >
          DEL
          </div>
        </div> 
        <div class="col-span-2 items-center ">
          <div class="text-center text-xl text-white font-semibold bg-green-500 border-green-400 hover:bg-green-600" color="green" @click="store.btnResultado()"> = </div>    
        </div>                     
      </div>                
    </div>
  </div>    
</template>

<script setup>
import { useCalculatorStore } from './store/calculator.ts';
//import Resultado from './components/Resultado.vue';

const store = useCalculatorStore();

const botones = ([7, 8, 9, '/', 4, 5, 6, '+', 1, 2, 3, '-', 0, '.', '%', '*',]);

</script>