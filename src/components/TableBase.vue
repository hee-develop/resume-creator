<template>
  <table
    class="table-layout"
    ref="table"
    :style="gridColumnTemplate"
  >
    <thead>
      <th
        class="cell header"
        v-for="head in header"
        :key="head"
      >
        {{head}}
      </th>
    </thead>

    <tbody>
      <tr
        class="row"
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
          <row-button
            class="btn-cell-remover"
            v-if="columnIndex === row.length - 1"
            type="minus"
            @onButtonClicked="() => removeRow(rowIndex)"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <div class="table-bottom-button">
    <row-button
      type="add"
      @onButtonClicked="addRow"
    />
  </div>
</template>

<script>
import RowButton from './atoms/RowButton.vue';
import ModifiableTextarea from './ModifiableTextarea.vue';

export default {
  components: { ModifiableTextarea, RowButton },
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

    removeRow(rowIndex) {
      this.$emit('remove-row', rowIndex);
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

.table-layout {
  display: grid;
  width: 100%;
  border: 2px solid #000;
  border-collapse: collapse;
}

.cell {
  position: relative;
  border: 1px solid #000;
  padding: 0.4em 0.2em;
}

.header {
  background-color: #EEE;
}

.table-bottom-button {
  margin-top: 0.4em;
  margin-bottom: 1em;
  font-size: 0.9em;
  text-align: center;
}

.row {
  position: relative;
}

.btn-cell-remover {
  visibility: collapse;
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  margin-left: 8px;
}

.btn-cell-remover:hover,
.row:hover .btn-cell-remover {
  visibility: visible;
}
</style>
