<template>
  <div>
    <v-row class="pa-4">
      <h2>بيانات الشغل</h2>
    </v-row>
    <v-row>
      <v-col v-for="cons in Consts" :key="cons.id" cols="12" md="4">
        <h3 style="margin-bottom: 10px">{{ cons.name }}</h3>
        <v-text-field
          v-model.number="cons.value"
          hide-details
          outlined
          type="number"
          append-icon="mdi-pen"
          @click:append="updateConst(cons.id, cons.value)"
          :label="cons.name"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-snackbar timeout="2000" color="green white" v-model="snackbar">
      <div class="text-center">تم التعديل بنجاح</div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    Consts() {
      return this.$store.state.consts;
    },
  },
  mounted() {
    this.$store.dispatch("getConsts");
  },
  methods: {
    loger(data) {
      console.log(data);
    },
    async updateConst(id, value) {
      await this.$store.dispatch("updateConstValue", { id, value });
      this.snackbar = !this.snackbar;
    },
  },
};
</script>

<style></style>
