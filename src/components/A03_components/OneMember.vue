<script lang="ts">
// Propsのインターフェース定義
interface Props {
    id: number;
}
</script>


<script setup lang="ts">
import { computed, inject } from 'vue';
import type { Member } from '../../interface/Member'

// A03_CompornentMain.vueからデータ(id)を受け取る
const props = defineProps<Props>()

// A03_CompornentMainでProvideした内容をInjectで受け取ることができる
const memberList = inject("memberList") as Map<number, Member>

// Propsで受け取ったIDから、memberListのMemberを取得する
const member = computed(
    (): Member => {
        return memberList.get(props.id) as Member
    }
)

const localNote = computed(
    (): string => {
        let localNote = member.value.note
        if (localNote == undefined) {
            localNote = "--"
        }
        return localNote
    }
)
</script>


<template>
    <section class="box">
        <h4>{{ member.name }}さんの情報</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>
            <dt>メールアドレス</dt>
            <dd>{{ member.email }}</dd>
            <dt>保有ポイント</dt>
            <dd>
                <input type="number" v-model.number="member.points" />
            </dd>
            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>