<template>
  <div class="home">
    <div class="inputs">
      <v-row class="">
        <v-col cols="12"><h2>بيانات العميل</h2></v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="description"
            hide-details
            outlined
            label="البيان"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="customerName"
            hide-details
            outlined
            label="اسم العميل"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="companyName"
            hide-details
            outlined
            label="اسم الجهة"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>بيانات الشغل</h2>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="letterNumber"
            hide-details
            outlined
            type="number"
            label="عدد الأظرف"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="letterSize"
            hide-details
            outlined
            label="حجم الظرف"
          ></v-text-field>
        </v-col>

        <v-col cols="6" md="2">
          <v-text-field
            v-model="letterPrice"
            hide-details
            outlined
            label="سعر الظرف"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="6" md="2">
          <v-select
            hide-details
            :items="colors"
            v-model="colorsNumber"
            label="عدد الالوان"
            outlined
          ></v-select>
        </v-col>

        <v-col cols="6" md="2">
          <v-text-field
            v-model="profitRatio"
            hide-details
            outlined
            type="number"
            label="نسبة الربح"
          ></v-text-field>
        </v-col>

        <v-col cols="6" md="2">
          <v-text-field
            v-model="comments"
            hide-details
            outlined
            label="ملاحظات"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div id="print" class="print mt-4" dir="rtl">
      <div id="worker">
        <div class="infoStat">
          <img src="../assets/شانيل للطباعة أسود.png" alt="" width="100" />
        </div>

        <table dir="rtl">
          <tr>
            <th>رقم الأمر</th>
            <th>البيان</th>
            <th>اسم العميل</th>
            <th>اسم الجهة</th>
            <th>التاريخ</th>
          </tr>
          <tr>
            <th>{{ orderNumber }}</th>
            <th>{{ description }}</th>
            <th>{{ customerName }}</th>
            <th>{{ companyName }}</th>
            <th>{{ dataVar }}</th>
          </tr>
        </table>
        <br />
        <table dir="rtl" id="star">
          <tr>
            <th>عدد الاظرف</th>
            <th>{{ letterNumber }}</th>
            <th>حجم الظرف</th>
            <th>{{ letterSize }}</th>
          </tr>
          <tr>
            <th>الطباعة</th>
            <th>{{ letterNumber }}</th>
            <th>عدد الالوان</th>
            <th>{{ colorsNumber }}</th>
          </tr>
        </table>
        <h4 v-if="comments != ''">ملاحظات</h4>

        <p>
          {{ comments }}
        </p>
      </div>

      <div class="html2pdf__page-break"></div>

      <div id="manger">
        <div class="infoStat">
          <img src="../assets/شانيل للطباعة أسود.png" alt="" width="100" />
        </div>

        <table dir="rtl">
          <tr>
            <th>رقم الأمر</th>
            <th>البيان</th>
            <th>اسم العميل</th>
            <th>اسم الجهة</th>
            <th>التاريخ</th>
          </tr>
          <tr>
            <th>{{ orderNumber }}</th>
            <th>{{ description }}</th>
            <th>{{ customerName }}</th>
            <th>{{ companyName }}</th>
            <th>{{ dataVar }}</th>
          </tr>
        </table>
        <br />
        <table dir="rtl" id="star">
          <tr>
            <th>عدد الاظرف</th>
            <th>{{ letterNumber }}</th>
            <th>حجم الظرف</th>
            <th>{{ letterSize }}</th>
          </tr>
          <tr>
            <th>الطباعة</th>
            <th>{{ letterNumber }}</th>
            <th>عدد الالوان</th>
            <th>{{ colorsNumber }}</th>
          </tr>
        </table>
        <br />
        <table dir="rtl">
          <tr>
            <th>الورق</th>
            <th>الزنك</th>
            <th>الطباعة</th>
            <th>السعر قبل النسبة</th>
            <th>السعر بعد النسبة</th>
          </tr>
          <tr>
            <th>{{ totalPaperPrice }}</th>
            <th>{{ zenkPrice }}</th>
            <th>{{ printPrice }}</th>

            <th>{{ totalPriceBefore }}</th>
            <th>{{ totalPriceAfter }}</th>
          </tr>
        </table>
        <h4 v-if="comments != ''">ملاحظات</h4>

        <p>
          {{ comments }}
        </p>
      </div>
    </div>
    <v-btn @click="dialog = !dialog" block depressed color="primary"
      >حفظ الأمر و طباعة</v-btn
    >
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          هل أنت متاكد من امر الشغل ؟
        </v-card-title>
        <v-card-text>
          برجاء التأكد من أمر الشغل جيدا قبل المبادرة في العملية
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false"> الغاء </v-btn>
          <v-btn color="green darken-1" text @click="generatePDF">
            طباعة
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
  data() {
    return {
      // Single data
      description: "",
      customerName: "",
      letterNumber: "",
      letterSize: "",
      letterPrice: "",
      colorsNumber: "",
      profitRatio: "",
      comments: "",
      companyName: "",
      letterGroupPrice: 50,

      dialog: false,
      zenk: 45,

      // Today Date
      dataVar: `${new Date().toLocaleDateString("ar-EG")}`,

      colors: [1, 2, 3, 4],
    };
  },
  computed: {
    orderNumber() {
      return this.$store.state.orderNumber;
    },
    zenkPrice() {
      return this.colorsNumber * this.zenk;
    },
    totalPaperPrice() {
      return this.letterNumber * this.letterPrice;
    },
    printPrice() {
      return (
        Math.ceil(Math.ceil(this.letterNumber / 1000)) *
        this.letterGroupPrice *
        this.colorsNumber
      );
    },
    totalPriceBefore() {
      return this.totalPaperPrice + this.zenkPrice + this.printPrice;
    },
    totalPriceAfter() {
      return Math.ceil(
        this.totalPriceBefore + (this.totalPriceBefore * this.profitRatio) / 100
      );
    },
  },
  methods: {
    async generatePDF() {
      await this.$store.dispatch("updateOrderNumber");

      let option = {
        margin: 5,
        filename: `${this.dataVar} ${this.description}`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { format: "a5", orientation: "landscape" },
      };
      var element = document.getElementById("print");
      html2pdf().set(option).from(element).save();
      this.dialog = !this.dialog;
    },
  },
  async mounted() {
    await this.$store.dispatch("getOrderNumber");
    await this.$store.dispatch("getConsts");
    this.zenk = this.$store.getters.zenkPrice[0].value;
    this.letterGroupPrice = this.$store.getters.letterPrice[0].value;
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  color: black;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: right;
  padding: 8px;
}
</style>
