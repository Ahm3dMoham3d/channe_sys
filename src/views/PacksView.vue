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
            v-model="booksNumber"
            hide-details
            outlined
            type="number"
            label="عدد الدفاتر"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-select
            hide-details
            :items="paperSizeArray"
            v-model="paperSize"
            label="حجم الورق"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="paperSizeGM"
            hide-details
            outlined
            label="حجم الورق (جم)"
            type="text"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="packsNumber"
            hide-details
            outlined
            label="عدد البواكي"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="packsPrice"
            hide-details
            outlined
            label="سعر الباكو"
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
          <v-select
            hide-details
            :items="jobTypeArray"
            v-model="jobType"
            item-text="name"
            item-value="value"
            label="نوع الشغل"
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
            v-model="finishPrice"
            hide-details
            outlined
            type="number"
            label="تشطيب"
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2">
          <v-text-field
            v-model="numberStart"
            hide-details
            outlined
            type="number"
            label="بداية النمرة"
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

        <v-col cols="6" md="2">
          <v-checkbox
            :disabled="jobType !== 2"
            v-model="oneCopy"
            label="أصل فقط"
          ></v-checkbox>
        </v-col>
        <v-col cols="6" md="2">
          <v-checkbox
            :disabled="!oneCopy"
            v-model="doubleFace"
            label="وش وضهر"
          ></v-checkbox>
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
            <th>عدد الدفاتر</th>
            <th>{{ booksNumber }}</th>
            <th>حجم الورق</th>
            <th>{{ `${paperSizeGM}` }} / {{ paperSize }}</th>
          </tr>
          <tr>
            <th>الطباعة</th>
            <th>{{ print }}</th>
            <th>عدد البواكي</th>
            <th>{{ packsNumber }}</th>
          </tr>
          <tr>
            <th>عدد الالوان</th>
            <th>{{ colorsNumber }}</th>
            <th>نوع الشغل</th>
            <th>{{ JobType }}</th>
          </tr>
          <tr v-if="numberStart != ''">
            <th v-if="oneCopy != true">تقسيم النمرة</th>
            <th v-if="oneCopy != true">{{ dividePrint }}</th>
            <th v-if="oneCopy != true">التقسيم</th>
            <th v-if="oneCopy != true">{{ divideFText }}</th>
          </tr>
          <tr v-if="numberStart != ''">
            <th>بداية النمرة</th>
            <th>{{ numberStart }}</th>
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
            <th>عدد الدفاتر</th>
            <th>{{ booksNumber }}</th>
            <th>حجم الورق</th>
            <th>{{ `${paperSizeGM} جم` }} / {{ paperSize }}</th>
          </tr>
          <tr>
            <th>الطباعة</th>
            <th>{{ print }}</th>
            <th>عدد البواكي</th>
            <th>{{ packsNumber }}</th>
          </tr>
          <tr>
            <th>عدد الالوان</th>
            <th>{{ colorsNumber }}</th>
            <th>نوع الشغل</th>
            <th>{{ JobType }}</th>
          </tr>

          <tr v-if="numberStart != ''">
            <th>تقسيم النمرة</th>
            <th>{{ dividePrint }}</th>
            <th v-if="oneCopy != true">التقسيم</th>
            <th v-if="oneCopy != true">{{ divideFText }}</th>
          </tr>
          <tr v-if="numberStart != ''">
            <th>بداية النمرة</th>
            <th>{{ numberStart }}</th>
          </tr>
        </table>
        <br />
        <table dir="rtl">
          <tr>
            <th>الورق</th>
            <th>الزنك</th>
            <th>الطباعة</th>
            <th v-if="numberStart">نمرة</th>
            <th>تشطيب</th>
            <th>السعر قبل النسبة</th>
            <th>السعر بعد النسبة</th>
          </tr>
          <tr>
            <th>{{ totalPaperPrice }}</th>
            <th>{{ zenkPrice }}</th>
            <th>{{ printPrice }}</th>
            <th v-if="numberStart">{{ NumPrice }}</th>
            <th>{{ finishPrice }}</th>
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
      booksNumber: "",
      paperSize: "",
      paperSizeGM: "",
      colorsNumber: "",
      jobType: "",
      profitRatio: "",
      numberStart: "",
      packsNumber: "",
      packsPrice: "",
      comments: "",
      finishPrice: 0,
      companyName: "",
      oneCopy: false,
      dialog: false,
      doubleFace: false,
      zenk: 45,
      printP: 30,
      packsGroupNumber: 500,

      // Today Date
      dataVar: `${new Date().toLocaleDateString("ar-EG")}`,
      // Array Data
      jobTypeArray: [
        {
          value: 2,
          name: "أصل - أصل وصورة",
        },
        {
          value: 3,
          name: "أصل و 2 صورة",
        },
        {
          value: 4,
          name: "أصل و 3 صورة",
        },
        {
          value: 5,
          name: "أصل و 4 صورة",
        },
        {
          value: 6,
          name: "أصل و 5 صورة",
        },
      ],
      paperSizeArray: ["A3", "A4", "A9"],
      colors: [1, 2, 3, 4],
    };
  },
  computed: {
    print() {
      if (this.doubleFace) {
        return this.packsNumber * this.packsGroupNumber * 2 || "";
      } else {
        return this.packsNumber * this.packsGroupNumber || "";
      }
    },
    fNum() {
      return (
        Math.ceil(this.print / Math.trunc(this.paperSize)) + 2 * this.jobType
      );
    },
    divideF() {
      return Math.ceil(this.fNum / this.jobType);
    },
    dividePrint() {
      return Math.ceil(this.print / this.jobType);
    },
    divideFText() {
      let text = "";
      if (this.jobType == 2) {
        text = "أول - أخير";
      } else if (this.jobType == 3) {
        text = "أول - وسط - اخير";
      } else if (this.jobType == 4) {
        text = "أول - وسط 1 - وسط 2- اخير";
      } else if (this.jobType == 5) {
        text = "أول - وسط 1 - وسط 2 - وسط 3 - اخير";
      } else if (this.jobType == 6) {
        text = "أول - وسط 1 - وسط 2 - وسط 3 - وسط 4 -اخير";
      }

      return text;
    },
    JobType() {
      let text = "";
      if (this.jobType == 2 && !this.oneCopy) {
        text = "اصل وصورة";
      } else if (this.jobType == 2 && this.oneCopy) {
        text = "أصل فقط";
      } else if (this.jobType == 3) {
        text = "أصل و 2 صورة";
      } else if (this.jobType == 4) {
        text = "أصل و 3 صورة";
      } else if (this.jobType == 5) {
        text = "أصل و 4 صورة";
      } else if (this.jobType == 6) {
        text = "أصل و 5 صورة";
      }

      return text;
    },
    // Manger
    totalPaperPrice() {
      return Math.ceil(this.packsNumber * this.packsPrice);
    },
    zenkPrice() {
      return this.colorsNumber * this.zenk;
    },
    printPrice() {
      return (
        Math.ceil(Math.ceil(this.print / 1000)) *
        this.printP *
        this.colorsNumber
      );
    },
    NumPrice() {
      return Math.ceil(Math.ceil(this.print / 1000)) * this.printP;
    },
    totalPriceBefore() {
      let totalPriceBefore = "";
      if (this.numberStart != "") {
        totalPriceBefore =
          this.totalPaperPrice +
          this.zenkPrice +
          this.printPrice +
          this.NumPrice +
          parseInt(this.finishPrice);
      } else {
        totalPriceBefore =
          this.totalPaperPrice +
          this.zenkPrice +
          this.printPrice +
          parseInt(this.finishPrice);
      }
      return Math.ceil(totalPriceBefore);
    },
    totalPriceAfter() {
      return Math.ceil(
        this.totalPriceBefore + (this.totalPriceBefore * this.profitRatio) / 100
      );
    },
    orderNumber() {
      return this.$store.state.orderNumber;
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
    try {
      await Promise.all([
        this.$store.dispatch("getOrderNumber"),
        this.$store.dispatch("getConsts"),
      ]);

      this.zenk = this.$store.getters.zenkPrice[0].value;
      this.printP = this.$store.getters.printP[0].value;
      this.finishPrice = this.$store.getters.bookFinishPrice[0].value;
      this.packsGroupNumber = this.$store.getters.packsGroupNumber[0].value;
    } catch (error) {
      console.error("Error loading initial data:", error);
      // Optionally set default values or notify the user
    }
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
