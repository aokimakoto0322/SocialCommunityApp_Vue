<script setup lang="ts">
import OneSection from './components/A01_components/OneSection.vue'
import WithModel from './components/A01_components/WithModel.vue'
import OneInfo from './components/A01_components/OneInfo.vue'

// コンポーネントについてのサンプルページ作成
</script>

<template>
  <h1>コンポーネントについてのサンプル</h1>
  <section>
    <h2>コンポーネント1</h2>
    <OneSection />
  </section>
  <section>
    <h2>コンポーネント2</h2>
    <OneSection />
  </section>

  <section>
    <p>v-modelを含んだコンポーネント(v-modelはコンポーネントで独立して動作する)</p>
    <WithModel />
    <WithModel />
  </section>

  <section>
    <p>親から子へのデータ受け渡し</p>
    <OneInfo title="Propsの利用" content="子コンポーネントへデータを受け渡し" />
  </section>
</template>