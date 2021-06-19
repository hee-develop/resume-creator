<template>
  <table-base
    :header="historyHead"
    :table-data="historyData"
    :columnSizeArr="columnSizeArr"
    @add-row="addRow"
    @cell-updated="cellUpdated"
  />
</template>

<script>
import TableBase from './TableBase.vue';
import { mapState } from 'vuex';

export default {
  components: { TableBase },

  computed: mapState({
    historyHead: (state) => state.history.head,
    historyData: (state) => state.history.data,
  }),

  data() {
    return {
      columnSizeArr: ['5em', '3em', '1fr'],
    }
  },

  methods: {
    addRow() {
      this.$store.commit('addHistoryRow');
    },

    cellUpdated(rowIndex, columnIndex, newValue) {
      this.$store.commit('updateHistory', [rowIndex, columnIndex, newValue]);
      console.log('updated');
    },
  },
}
</script>

<style>
</style>
