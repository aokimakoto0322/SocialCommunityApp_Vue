<script lang="ts">
// 一度interfaceを定義した後にdefinePropsをしないとエラーになる
// https://github.com/vuejs/language-tools/issues/1232
interface Props {
    title: string;
    content: string;
}
</script>

<script setup lang="ts">
defineProps<Props>()
</script>

<template>
    <section class="box">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
    </section>
</template>

<style scoped>
.box{
    border: green 1px dashed;
    margin: 10px;
}
</style>