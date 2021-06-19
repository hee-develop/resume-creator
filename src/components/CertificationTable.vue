<template>
  <table-base
    :header="certificationHead"
    :table-data="certificationData"
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
    certificationHead: (state) => state.certification.head,
    certificationData: (state) => state.certification.data,
  }),

  data() {
    return {
      columnSizeArr: ['5em', '3em', '1fr'],
    }
  },

  methods: {
    addRow() {
      this.$store.commit('addCertificationRow');
    },

    cellUpdated(rowIndex, columnIndex, newValue) {
      this.$store.commit('updateCertification', [rowIndex, columnIndex, newValue]);
      console.log('updated');
    },
  },
}
</script>

<style>
</style>
