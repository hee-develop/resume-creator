<template>
  <h3>学歴・社歴</h3>
  <table-base
    :header="header"
    :table-data="tableData"
    :columnSizeArr="columnSizeArr"
    @add-row="addRow"
    @cell-updated="cellUpdated"
  />
</template>

<script>
import { reactive } from '@vue/reactivity';
import TableBase from './TableBase.vue';

export default {
  components: { TableBase },

  data() {
    return {
      header: ['西暦', '月', '学歴・社歴'],
      tableData: [
        ['2020', '2', 'M入社'],
        ['2020', '2', 'M入社'],
      ],
      columnSizeArr: ['10%', '20%', '1fr'],
    }
  },

  methods: {
    addRow() {
      this.tableData = [...this.tableData, reactive(Array(this.header.length).fill(''))];
    },

    cellUpdated(rowIndex, columnIndex, newValue) {
      // insert is better than spread; tableData is in Proxy
      this.tableData[rowIndex][columnIndex] = newValue;

      // const tempRow = [...this.tableData[rowIndex]];
      // tempRow[columnIndex] = newValue;

      // this.tableData = [
      //   ...this.tableData.slice(0, rowIndex),
      //   tempRow,
      //   ...this.tableData.slice(rowIndex + 1),
      // ];

      console.log('updated');
    }
  },
}
</script>

<style>
</style>
