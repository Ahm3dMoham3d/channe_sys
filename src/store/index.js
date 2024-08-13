import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase/config";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderNumber: 0,
    consts: [],
  },
  getters: {
    paperPrice(state) {
      return state.consts.filter((cons) => cons.id == "paperPrice");
    },
    cutPrice(state) {
      return state.consts.filter((cons) => cons.id == "cutPrice");
    },

    zenkPrice(state) {
      return state.consts.filter((cons) => cons.id == "zenkPrice");
    },

    printP(state) {
      return state.consts.filter((cons) => cons.id == "printPrice");
    },

    stackNumber(state) {
      return state.consts.filter((cons) => cons.id == "stackNumber");
    },
    packsGroupNumber(state) {
      return state.consts.filter((cons) => cons.id == "packsNumber");
    },
    bookFinishPrice(state) {
      return state.consts.filter((cons) => cons.id == "bookFinishPrice");
    },
    letterPrice(state) {
      return state.consts.filter((cons) => cons.id == "letterPrice");
    },
  },
  mutations: {
    // Order Number
    SET_ORDER: (state, number) => {
      state.orderNumber = number;
    },
    INC_ORDER: (state) => {
      state.orderNumber++;
    },
    GET_CONSTS: (state, data) => {
      state.consts = data;
    },
  },
  actions: {
    // Order Number
    getOrderNumber: async ({ commit }) => {
      const docRef = doc(db, "number", "6GyiaePaNowXSOlbX5Uy");
      const docSnap = await getDoc(docRef);
      commit("SET_ORDER", docSnap.data().number);
    },
    updateOrderNumber: async ({ commit }) => {
      const docRef = doc(db, "number", "6GyiaePaNowXSOlbX5Uy");
      const docSnap = await getDoc(docRef);
      await updateDoc(docRef, {
        number: docSnap.data().number + 1,
      });
      commit("INC_ORDER");
    },
    // Get Consts
    getConsts: async ({ commit }) => {
      const querySnapshot = await getDocs(collection(db, "consts"));
      let consts = [];
      querySnapshot.forEach((doc) => {
        consts.push({ ...doc.data(), id: doc.id });
        commit("GET_CONSTS", consts);
      });
    },
    updateConstValue: async (_, { id, value }) => {
      const docRef = doc(db, "consts", id);
      await updateDoc(docRef, {
        value: value,
      });
    },
  },
  modules: {},
});
