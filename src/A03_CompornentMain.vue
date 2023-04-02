<script setup lang="ts">
import { reactive, provide } from 'vue'
import BaseSection from './components/A03_components/BaseSection.vue'
import type { Member } from './interface/Member'

// 会員情報のリストを用意
const memberList = new Map<number, Member>()
memberList.set(33456, {id: 33456, name: "たなかたろう", email: "abc@gmail.com", points: 35, note: "aiueo"})
memberList.set(33234, {id: 33234, name: "すずきじろう", email: "cdf@gmail.com", points: 67})

// 会員情報をProvide
provide("memberList", reactive(memberList))

</script>

<template>
    <BaseSection />
</template>