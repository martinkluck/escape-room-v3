<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">En frente a las estanterías</h1>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <h4 class="mb-4">Hay muchas cosas en esta estantería...</h4>
      </div>
      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img src="https://http2.mlstatic.com/D_NQ_NP_939144-MLA40516100224_012020-V.jpg" alt=""
            class="object-contain w-full my-5" />
        </div>
      </div>
      <div v-if="!revisar" class="text-center px-4 py-2 m-2">
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" @click="revisar = true">
          Revisar estantes
        </button>
      </div>
      <div v-if="revisar" class="text-center px-4 py-2 m-2">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black text-5xl">
          Hay una foto que tiene escrito un año detrás: 1978
        </div>
      </div>
      <div v-if="revisar" class="text-center px-4 py-2 m-2">
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="$router.push('/cobertizo/dentro')">
          Volver
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const revisar = ref(false);
useHead({
  title: 'Dentro del cobertizo',
  meta: [
    { name: 'Dentro del cobertizo', content: '' }
  ],
})
</script>
