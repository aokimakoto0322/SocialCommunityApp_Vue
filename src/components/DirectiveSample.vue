<script setup lang="ts">
import { ref } from 'vue'

const url = ref("https://vuejs.org/")
const isSendButtonDisabled = ref(true)

const imgAttribute = ref({
    src: "/src/assets/logo.svg",
    alt: "vueのロゴ",
    width: 75,
    height: 75
})

</script>

<template>
    <div>
        <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
        <p><a :href="url" target="_blank">Vue.jsのサイト(v-bind省略)</a></p>
        <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsのガイドページ</a></p>
        <button v-bind:disabled="isSendButtonDisabled">v-bindのボタン</button>
        <div>
            <p><img v-bind="imgAttribute">オブジェクトに属性名を指定してv-bindするとまとめて属性を指定できる</p>
        </div>
        <p>v-bindの目的：マスタッシュ構文(中括弧2つ)は属性に使えない。そのため、属性にスクリプトの変数を設定したい場合はv-bindを使い変数を定義する</p>
    </div>
</template>