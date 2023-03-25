<template>
  <div class="login">
    <img class="logo_img mb-10" width="250" src="../assets/logo_black.svg" />
    <div class="warp">
      <v-text-field v-model="email" outlined label="الحساب"></v-text-field>
      <v-text-field
        v-model="password"
        outlined
        type="password"
        label="كلمة المرور"
      ></v-text-field>
      <v-btn
        :disabled="!email || !password"
        @click="signIn"
        block
        depressed
        color="primary"
        >تسجيل الدخول</v-btn
      >
      <h4 class="font-weight-regular err">{{ errMsg }}</h4>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import router from "@/router";
export default {
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
      isLoggedIn: false,
    };
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          router.push("/sheets");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "الايميل خاطئ";
              break;
            case "auth/user-not-found":
              this.errMsg = "لا يوجد مستخدم بهذا الحساب";
              break;
            case "auth/wrong-password":
              this.errMsg = "كلمة المرور خاطئة";
              break;
            default:
              this.errMsg = "كلمة المرور او الحساب غير صحيح";
          }
        });
    },
  },
  components: {},
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.isLoggedIn = true;
        router.push("/sheets");
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>
<style scoped>
.login {
  padding: 50px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.warp {
  width: 70vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}
.logo_img {
  width: 50vw;
  max-width: 250px;
}
.err {
  color: red;
  text-align: center;
  margin-top: 15px;
}
</style>
