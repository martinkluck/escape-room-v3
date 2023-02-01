<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Estamos en el armario</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">Deberíamos revisar si encontramos algo dentro...</h4>
      </div>
      <div v-if="open" class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="/img/armario_abierto.png"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div v-if="!open" class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="/img/armario_cerrado.png"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div v-if="!open" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="abrirArmario"
        >
          Abrir armario
        </button>
      </div>
      <div v-if="open" class="flex text-center px-4 py-2 m-2 justify-center">
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl font-mono"
        >
          De niño siempre creía que dentro del armario había un monstruo eso
          siempre me
          <strong style="font-family: monospace !important">ASU</strong>staba
          mucho.
        </div>
      </div>
      <div v-if="open" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/casa')"
        >
          Volver al living
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageStore } from '~/store/page';
useHead({
  title: 'Armario',
  meta: [
    { name: 'Armario', content: '' }
  ],
})
const pageStore = usePageStore();
let open = ref(false);
function abrirArmario() {
  open.value = !open.value;
  pageStore.partTwoKeyFound = true;
}
</script>
