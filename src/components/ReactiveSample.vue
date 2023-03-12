<script setup lang="ts">
import { ref, computed, reactive } from 'vue'


// -- ref関数についてのサンプル
const nowstr = new Date().toLocaleTimeString()
let timestr  = new Date().toLocaleTimeString()
// nowstr = timestr

const timeStrRef = ref(nowstr)

//新しい時刻に変更
function changeTime(): void {
    const newTimeStr = new Date().toLocaleTimeString()

    //定義した時刻に新しい時刻を代入
    timestr = newTimeStr
    timeStrRef.value = newTimeStr
}

//changeTime関数を1秒ごとに実行
setInterval(changeTime, 1000)

//timestrは画面描画の更新がされず、時間が更新されず、
//timeStrRefは画面描画の更新がされ、時間が更新されるらしい

//実際に試してみたところ、どちらも時間が更新されている
//HotReloadが影響していると推察したが、HotReloadをOFFにしても変わらなかったため、原因不明

// -------------------------------------------------------------------------

// -- computed関数についてのサンプル

// 目的：円の半径をランダムで生成し、円の面積を算出する
// 円の半径は1秒ごとに変化し、変化した度に円の面積を算出し、描画する
const radiusInit = Math.round(Math.random() * 10)
const PI = ref(3.14)
const radius = ref(radiusInit)

const area = computed(
    (): number => {
        //refの値が二種類以上あった場合に値を更新しつつ、値を返却する
        //もしcomputedを使用しなかった場合、値ではなく式の文字列が画面表示されてしまう
        return radius.value * radius.value * PI.value
    }
)

setInterval(
    (): void => {
        radius.value = Math.round(Math.random() * 10)
    },
    1000
)

// -------------------------------------------------------------------------

// reactiveについてのサンプル

// 目的：ref関数でリアクティブにしたい変数を定義していたが、多数リアクティブにしたい場合
// その都度宣言する必要がある。
// 都度宣言は面倒なので、reactiveでまとめてリアクティブにしたい変数を定義することができる

const reactiveData = reactive({
    PI: 3.14,
    radius: Math.round(Math.random() * 10)
})

// computedで描画する数値を計算する
const calcCicleArea = computed(
    () => {
        return reactiveData.radius * reactiveData.radius * reactiveData.PI
    }
)

setInterval(
    (): void => {
        reactiveData.radius = Math.round(Math.random() * 10)
    },
    1000
)


</script>

<template>
    <div>
        <h2>ref関数についてのサンプル</h2>
        <div>
            <p>現在時刻: {{ timestr }}</p>
            <p>現在時刻(ref): {{ timeStrRef }}</p>
        </div>

        <h2>computed関数についてのサンプル</h2>
        <div>
            <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると、{{ area }}</p>
        </div>

        <h2>reactive関数についてのサンプル</h2>
        <div>
            <p>半径{{ reactiveData.radius }}の円の面積を円周率{{ reactiveData.PI }}で計算すると、{{ calcCicleArea }}</p>
        </div>
    </div>
</template>