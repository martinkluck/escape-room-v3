<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Cajones de la cocina</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">
          Mmm en cual de los cajones podremos encontrar algo?
        </h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="/img/cajonera.webp"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h3 v-if="message">{{ message }}</h3>
      </div>
      <div v-if="pageStore.partOneKeyFound" class="text-center px-4 py-2 m-2">
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl"
        >
          La
          <strong style="font-family: monospace !important">CENA</strong>
          siempre estaba lista cuando mama llamaba a comer.
        </div>
      </div>
      <div v-if="!pageStore.partOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="message = 'Primer cajon: No hay nada'"
        >
          Primer cajon
        </button>
      </div>
      <div v-if="!pageStore.partOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="message = 'Segundo cajon: No hay nada'"
        >
          Segundo cajon
        </button>
      </div>
      <div v-if="!pageStore.partOneKeyFound" class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="abrirPista()"
        >
          Tercer cajon
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
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
  title: 'Cajones',
  meta: [
    { name: 'Cajones', content: '' }
  ],
})
const pageStore = usePageStore();
let message = ref('');
function abrirPista() {
  message.value = '';
  pageStore.partOneKeyFound = true;
}
</script>
