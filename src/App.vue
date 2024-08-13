<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right v-if="isLoggedIn">
      <NavView />
    </v-navigation-drawer>

    <v-app-bar dark color="primary" app>
      <v-app-bar-nav-icon
        v-if="isLoggedIn"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="signOutFromUser" icon v-if="isLoggedIn">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <span style="font-size: 1rem">نسخة تجريبية 2/3/2023</span>
    </v-app-bar>

    <v-main>
      <router-view class="pa-4" />
    </v-main>
  </v-app>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import NavView from "./components/NavView.vue";
import router from "@/router";
export default {
  name: "App",

  data: () => ({
    isLoggedIn: false,
    drawer: null,
  }),
  components: {
    NavView,
  },

  methods: {
    signOutFromUser() {
      signOut(getAuth()).then(() => {
        router.push("/");
      });
    },
  },
  async mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>

<style>
/* Font */
</style>
