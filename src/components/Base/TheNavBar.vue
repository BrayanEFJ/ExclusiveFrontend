<script setup>
import { Heart } from 'lucide-vue-next';
import { ShoppingCart } from 'lucide-vue-next';
import inputGray from '../Inputs/InputGray.vue';
</script>

<template>
  <nav class=" w-full flex justify-between items-center p-4 mt-4 ">
    <span class="text-2xl font-bold">
      Exclusive
    </span>
    <div>
      <ul class="flex space-x-10">
        <li>
          <a href="#" class="">Home</a>
        </li>
        <li>
          <a href="#" class="">Contact</a>
        </li>
        <li>
          <a href="#" class="">About</a>
        </li>
        <li>
          <a href="#" class="">Sing up</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-4">
      <inputGray placeholder="What are you looking for?" search="true" />
      <div class="relative">
        <Heart :size="30" />
        <!-- Bolita roja con número -->
        <div class="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-md">5
        </div>
      </div>
      <ShoppingCart :size="30" />
    </div>
  </nav>
</template>
