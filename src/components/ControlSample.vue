<script setup lang="ts">
import { ref } from 'vue'

const menuList = ref(["すいか", "いちご", "メロン", "バナナ"])

const cheeseList = ref({
    13: "ゴーダ",
    24: "フレッシュ",
    36: "カッテージ",
    48: "マスカルポーネ"
})

const coffeeList = [
    {id: 1, name: "ブルーマウンテン", price: 5000},
    {id: 2, name: "キリマンジャロ", price: 5200},
    {id: 3, name: "コナ", price: 4800},
]




</script>

<template>
    <div>
        <ul>
            <li v-for="(menu, index) in menuList" v-bind:key="menu">{{ menu }}[{{ index }}]</li>
        </ul>

        <ul>
            <li v-for="(cheese, key, index) in cheeseList" v-bind:key="cheese">チーズ名：{{ cheese }}　ID：{{ key }}　index: {{ index }}</li>
        </ul>
    </div>
    
</template>