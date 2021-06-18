<template>
  <table
    class="table"
    ref="table"
    :style="gridColumnTemplate"
  >
    <thead>
      <th
        class="cell"
        v-for="head in header"
        :key="head"
      >
        {{head}}
      </th>
    </thead>

    <tbody>
      <tr
        v-for="(row, rowIndex) in tableData"
        :key="rowIndex"
      >
        <td
          class="cell"
          v-for="(cell, columnIndex) in row"
          :key="columnIndex"
        >
          <modifiable-textarea
            :cell-value="cell"
            @cell-updated="(newValue) => cellUpdated(rowIndex, columnIndex, newValue)"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <button
    @click="addRow"
  >
    +
  </button>
</template>

<script>
import ModifiableTextarea from './ModifiableTextarea.vue';

export default {
  components: { ModifiableTextarea },
  props: {
    header: { type: Array, required: true },
    tableData: { type: Array, default: () => [[]] },
    columnSizeArr: { type: Array, default: () => [] },
  },
  emits: ['add-row', /* 'add-column',  */'cell-updated'],

  computed: {
    gridColumnTemplate() {
      return { gridTemplateColumns: this.columnSizeArr.join(' ') };
    },
  },

  methods: {
    addRow() {
      this.$emit('add-row');
    },
    // addColumn() {
    //   this.$emit('add-column');
    // },

    cellUpdated(rowIndex, columnIndex, newValue) {
      this.$emit('cell-updated', rowIndex, columnIndex, newValue);
    }
  }
}
</script>

<style>
table, thead, tbody, tr {
  display: contents;
}

.table {
  display: grid;
  width: 100%;
}

.table,
.cell {
  border: 1px solid #000;
  border-collapse: collapse;
}
</style>
