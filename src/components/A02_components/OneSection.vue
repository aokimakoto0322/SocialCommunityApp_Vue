<script lang="ts">
// 親→子へのデータ受け渡しinterface定義
interface Props {
    rand: number;
}

// 子→親へのデータ受け渡しinterface定義
interface Emits {
    (event: "createNewRand"): void;
}
</script>

<script setup lang="ts">
defineProps<Props>()
const emit = defineEmits<Emits>()

const onNewRandButtonClick = (): void => {
    emit("createNewRand")
}
</script>

<template>
    <section class="box">
        <p>子コンポーネントで乱数を表示：{{ rand }}</p>
        <button v-on:click="onNewRandButtonClick">乱数生成</button>
    </section>
</template>