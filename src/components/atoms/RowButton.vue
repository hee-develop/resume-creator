<template>
  <div
    class="row-button"
    @click="buttonClicked"
    title="１行を増やす"
  >
    <span class="row-button-text">{{buttonType}}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true },
  },
  emits: ['onButtonClicked'],

  computed: {
    buttonType() {
      switch (this.type) {
        case 'add':
          return '﹢';
        case 'minus':
          return '﹣';
        default:
          return '';
      }
    },
  },

  methods: {
    buttonClicked() {
      this.$emit('onButtonClicked');
    }
  }
}
</script>

<style scoped>
.row-button {
  width: 2em;
  height: 2em;
  display: inline-flex;
  cursor: pointer;
  border-radius: 100%;
  background-color: #248;
  color: #fff;
  box-shadow: 1px 1px 1px #bbb;
}

.row-button:active {

}

.row-button-text {
  margin: auto;
  font-weight: bold;
  font-size: 1.6em;
  line-height: 1em;
  user-select: none;
}
</style>
