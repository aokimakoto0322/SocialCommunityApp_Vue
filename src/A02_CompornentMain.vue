<script setup lang="ts">
import { ref } from 'vue'
import OneSection from './components/A02_components/OneSection.vue'
import OneMember from './components/A02_components/OneMember.vue'

const rand = ref(Math.round(Math.random() * 10))
const onCreatedNewRand = (): void => {
    rand.value = Math.round(Math.random() * 10)
}

const email = "aaa@aaa.com"

</script>

<template>
  <h1>コンポーネント(子から親へのデータ受け渡し)についてのサンプル</h1>
  <div>
    <p>親コンポーネントで乱数を表示: {{ rand }}</p>
    <OneSection v-bind:rand="rand" v-on:createNewRand="onCreatedNewRand"></OneSection>
  </div>

  <div>
    <OneMember v-bind:email="email" v-model:point="rand"></OneMember>
  </div>
</template>