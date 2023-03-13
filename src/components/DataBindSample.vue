<script setup lang="ts">
import { ref } from 'vue'

const inputName = ref("名前")

//双方向データバインディングをv-modelを使用しないで実現する場合
const inputTwoWay = ref("双方向")
const onInputNameTwoWay = (event: Event) => {
    const element = event.target as HTMLInputElement
    inputTwoWay.value = element.value
}

const inputTextArea = ref("テキストエリア\nエスケープ")
const inputRadioButton = ref(1)
const inputSelect = ref(1)
const inputCheckBox = ref([])

</script>


<template>
    <section>
        <div>
            <input type="text" v-model="inputName">
            <p>{{ inputName }}</p>
        </div>
        
        <div>
            <input type="text" v-bind:value="inputTwoWay" v-on:input="onInputNameTwoWay">
            <p>{{ inputTwoWay }}</p>
        </div>

        <div>
            <textarea v-model="inputTextArea"></textarea>
        </div>

        <div>
            <label><input type="radio" value="1" v-model="inputRadioButton">ボタン１</label>
            <label><input type="radio" value="2" v-model="inputRadioButton">ボタン２</label>
            <label><input type="radio" value="3" v-model="inputRadioButton">ボタン３</label>
            <p>選択されたラジオボタン：{{ inputRadioButton }}</p>
        </div>

        <div>
            <select v-model="inputSelect">
                <option value="1">選択１</option>
                <option value="2">選択２</option>
                <option value="3">選択３</option>
            </select>
            <p>選択された値：{{ inputSelect }}</p>
        </div>

        <div>
            <label><input type="checkbox" v-model="inputCheckBox" value="1">A</label>
            <label><input type="checkbox" v-model="inputCheckBox" value="2">B</label>
            <label><input type="checkbox" v-model="inputCheckBox" value="3">C</label>
            <label><input type="checkbox" v-model="inputCheckBox" value="4">D</label>
            <label><input type="checkbox" v-model="inputCheckBox" value="5">E</label>
            <p>選択された値：{{ inputCheckBox }}</p>
        </div>
    </section>
</template>