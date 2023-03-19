<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

const incrementNum = ref(1)

computed(
    () => {
        return setInterval(() => incrementNum.value += 1, 500)
    }
)



</script>




<template>
    <div>
        <p>カウント: {{ incrementNum }}</p>
    </div>
</template>