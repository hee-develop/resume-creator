<template>
  <div
    class="modifiable-layout"
    @click="cellClicked"
  >
    <div
      class="edit-area"
      contenteditable="true"
      ref="editArea"
      v-text="cellValue"
      @blur="cellUpdated"
    />
  </div>
</template>

<script>
export default {
  props: ['cellValue'],
  emits: ['cell-updated'],

  methods: {
    cellClicked() {
      const editArea = this.$refs?.editArea;
      editArea?.focus();
    },

    cellUpdated({target}) {
      const trimmedInnerText = target.innerText.replaceAll(/^\n{2,}|^\n{2,}$/gm, '\n');

      this.$emit('cell-updated', trimmedInnerText);
    },
  }
}
</script>

<style scoped>
.modifiable-layout {
  width: 100%;
  height: 100%;
  display: flex;
}

.edit-area {
  width: 100%;
  padding: 0.1em 0.2em;
  margin-top: auto;
  margin-bottom: auto;
  white-space: break-spaces;
  text-align: start;
}
</style>
