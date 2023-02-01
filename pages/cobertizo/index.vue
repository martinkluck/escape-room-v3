<template>
  <div class="container">
    <div class="grid grid-cols-1 place-content-center">
      <div class="text-center px-4 py-2 m-2">
        <h1 class="subtitle">Puerta del cobertizo</h1>
      </div>
      <div class="text-center px-4 py-2 m-2 max-w-xl">
        <h4 v-if="havePassword()">Ahora creo que tenemos la contraseña...</h4>
        <h4 v-else>
          Llegamos a la puerta del cobertizo y vemos que tiene una llave, creo
          que vamos a tener que volver a la casa a buscarla...
        </h4>
      </div>

      <div class="text-center px-4 py-2 m-2 justify-items-auto">
        <div class="flex justify-center items-center px-4 py-2">
          <img
            src="https://p0.pikist.com/photos/743/453/latch-door-latch-fastening-fasten-secure-close-hold-wood-wooden-door.jpg"
            alt=""
            class="object-contain w-full my-5"
          />
        </div>
      </div>
      <div class="text-center px-4 py-2 m-2">
        Ingresar contraseña
        <input v-model="password" type="password" class="text-black" />
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="checkPassword()"
        >
          Revisar contraseña
        </button>
      </div>
      <div class="text-center px-4 py-2 m-2">
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          @click="volverACasa()"
        >
          Volver a la casa
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageStore } from '~/store/page';
const route = useRouter()
useHead({
  title: 'Puerta cobertizo',
  meta: [
    { name: 'Puerta cobertizo', content: '' }
  ],
})
const pageStore = usePageStore();
const password = ref('');
const valid = 'asucena';
function havePassword() {
  return pageStore.partOneKeyFound && pageStore.partTwoKeyFound;
}

function checkPassword() {
  if (password.value === valid) {
    route.push('/cobertizo/dentro');
  }
}
function volverACasa() {
  if (!pageStore.seenShed) {
    pageStore.seenShed  = !pageStore.seenShed;
  }
  route.push('/casa');
}
</script>
