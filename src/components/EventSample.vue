<script setup lang="ts">

import { ref } from 'vue'

const clickCount = ref(0)
const onClickCount = () => {
    clickCount.value += 1
}

const mousePointX = ref(0)
const mousePointY = ref(0)
const onMouseMove = (event: MouseEvent) => {
    mousePointX.value = event.offsetX
    mousePointY.value = event.offsetY
}

const BgColor = ref("white")
const onBgClick = (bgColor: string): void => {
    BgColor.value = bgColor
}

const msg = ref("メッセージ")
const bgColor2 = ref("white")
const onBgClickEvent = (bgColor: string, event: MouseEvent) => {
    bgColor2.value = bgColor
    msg.value = event.timeStamp.toString()
}

const submitMsg = ref("未送信")
const onFormSubmit = (): void => {
    submitMsg.value = "送信されました。"
}

// キー入力
const keyMsg = ref("キー入力")
const onEnterKey = (): void => {
    keyMsg.value = "エンターキーを入力しました。"
}

const onRightKeyClick = (): void => {
    keyMsg.value = "右クリックが押されました。"
}

const onShiftClick = (): void => {
    keyMsg.value = "シフトを押しながらクリックされました。"
}

</script>


<template>
    <div>
        <button v-on:click="onClickCount">カウントボタン</button>
        <p>{{ clickCount }}回ボタンが押されました</p>
    </div>

    <div>
        <img src="/src/assets/logo.svg" width="100" height="100" v-on:mousemove="onMouseMove">
        <p>pointerX = {{ mousePointX }} pointerY = {{ mousePointY }}</p>
    </div>

    <div>
        <p v-on:click="onBgClick('red')" v-bind:style="{backgroundColor: BgColor}">
            ボタンを押すと背景が赤に変わる(ボタンクリック時の引数で背景色を指定)
        </p>
    </div>

    <div>
        <p v-on:click="onBgClickEvent('green', $event)" v-bind:style="{backgroundColor: bgColor2}">{{ msg }}</p>
    </div>

    <div>
        <form action="#" v-on:submit.prevent="onFormSubmit">
            <input type="text" required>
            <button type="submit">送信</button>
        </form>
        <p>{{ submitMsg }}</p>
        <p>preventをしないと画面更新されて文字が「未送信」になる</p>
        <p>preventすると画面更新されずに送信され、文字が「送信済」になる</p>
    </div>

    <div>
        <p>{{ keyMsg }}</p>
        <input type="text" v-on:keydown.enter="onEnterKey">
        <button v-on:click.right="onRightKeyClick">右クリック</button>
        <button v-on:click.shift="onShiftClick">シフトを押しながらクリック</button>
    </div>

</template>