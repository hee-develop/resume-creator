import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      writtenIn: new Date(),

      defaultInfo: {
        name: '花子',
        nameRuby: 'はなこ',
        birthday: {
          year: 2000,
          month: 1,
          day: 1,
        },
        phoneNumber: '070-1234-5678',
        email: 'email@mail.com',
        zipcode: '123-4567',
        address: '東京都新宿区１−２−３　マンション１０００号',
        addressRuby: 'とうきょうとしんじゅくく１−２−３　まんしょん１０００ごう',
        etc: 'Github : github.com/hee-develop',
      },

      history: {
        head: ['西暦', '月', '学歴・職歴'],
        data: [
          ['2000', '3', '〇〇高等学校　卒業'],
          ['2000', '4', '〇〇大学〇〇部　〇〇学科　入学'],
          ['2000', '4', '〇〇大学〇〇部　〇〇学科　入学'],
        ],
      },

      certification: {
        head: ['西暦', '月', '資格・免許'],
      },

      otherInfo: {

      },
    };
  },

  getters: {
    getRealOld(state: any) {
      const now = state.writtenIn;
    },
  },

  mutations: {
    addHistoryRow(state) {
      const historyData = state.history.data;
      const rowLength = historyData[0].length;
      state.history.data.push(Array(rowLength).fill(''));
    },

    updateHistory(state, payload) {
      const [rowIndex, columnIndex, newValue] = payload;

      const tempRow = [...state.history.data[rowIndex]];
      tempRow[columnIndex] = newValue;

      state.history.data = [
        ...state.history.data.slice(0, rowIndex),
        tempRow,
        ...state.history.data.slice(rowIndex + 1),
      ];
    }
  },
})

createApp(App)
  .use(store)
  .mount('#app');
