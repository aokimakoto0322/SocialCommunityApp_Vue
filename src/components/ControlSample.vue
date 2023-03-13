<script setup lang="ts">
import { ref, computed } from 'vue'

const menuList = ref(["すいか", "いちご", "メロン", "バナナ"])

const cheeseList = ref({
    13: "ゴーダ",
    24: "フレッシュ",
    36: "カッテージ",
    48: "マスカルポーネ"
})


// v-forでリスト表示するが、5000円の豆しか表示しない（filterして表示する）
const coffeeList = ref([
    {id: 1, name: "ブルーマウンテン", price: 5000},
    {id: 2, name: "キリマンジャロ", price: 5200},
    {id: 3, name: "コナ", price: 4800},
])

const coffeeCalc = computed(
    () => {
        const newList = coffeeList.value.filter(
            (element) => {
                return element.price == 5000
            }
        )
        return newList
    }
)

// Map型の操作
const pcListInit = new Map<number, string>()
const pcList = ref(pcListInit)

const changePcList = () => {
    pcList.value.clear()
    pcList.value.set(1, "Lenovo")
    pcList.value.set(2, "NEC")
    pcList.value.set(3, "Panasonic")
}

const addPcList = () => {
    pcList.value.set(4, "Microsoft")
}

</script>

<template>
    <div>
        <ul>
            <li v-for="(menu, index) in menuList" v-bind:key="menu">{{ menu }}[{{ index }}]</li>
        </ul>

        <ul>
            <li v-for="(cheese, key, index) in cheeseList" v-bind:key="cheese">チーズ名：{{ cheese }}　ID：{{ key }}　index: {{ index }}</li>
        </ul>

        <ul>
            <li v-for="r in 5" v-bind:key="r">半径{{ r }}の円の円周: {{ 2 * r * 3.14 }}</li>
        </ul>

        <ul>
            <li v-for="coffeeitem in coffeeCalc" v-bind:key="coffeeitem.id">{{ coffeeitem.name }}</li>
        </ul>

        <ul>
            <li v-for="[id, item] in pcList" v-bind:key="id">{{ item }}</li>
        </ul>
        <button v-on:click="changePcList">PCリスト</button>
        <button v-on:click="addPcList">PC追加</button>
    </div>
    
</template>