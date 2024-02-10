<template>
    <div>
        <h1>Test Component</h1>
        <b-button @click="showModal">yo</b-button>
        <b-modal id="test"> yo yo </b-modal>
    </div>
</template>

<script setup>
import { useModal } from 'bootstrap-vue-next'
const modal = useModal('test')

function showModal() {
    modal.show()
}
</script>

<style lang="scss" scoped></style>
