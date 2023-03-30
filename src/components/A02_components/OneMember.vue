<script lang="ts">
interface Props {
    email: string;
    point: number;
}

interface Emits {
    (event: "update.point", point: number): void
}
</script>

<script setup lang="ts">
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const onInput = (event: Event): void => {
    const element = event.target as HTMLInputElement
    const inputPoint = Number(element.value)
    emit("update.point", inputPoint)
}
</script>

<template>
    <section>
        <dt>保有ポイント</dt>
        <dd>
            <input type="number" v-bind:value="point" v-on:input="onInput" />
            <p>{{ email }}</p>
        </dd>
    </section>
</template>