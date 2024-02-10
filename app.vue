<template>
  <div>
      <b-button @click="showModal">Click Me</b-button>
      <b-modal id="test">Modal Body</b-modal>
  </div>
</template>

<script setup>
import { useModal } from 'bootstrap-vue-next'
const modal = useModal('test')

function showModal() {
  modal.show()
}
</script>
