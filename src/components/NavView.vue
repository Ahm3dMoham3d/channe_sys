<template>
  <v-list nav dense>
    <v-subheader>اوامر الشغل</v-subheader>
    <v-list-item active-class="active" to="/sheets" link>
      <v-list-item-icon>
        <v-icon>mdi-book-plus-multiple</v-icon>
      </v-list-item-icon>
      <v-list-item-title>امر شغل أفرخ</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item active-class="active" to="/packs" link>
      <v-list-item-icon>
        <v-icon>mdi-archive-plus</v-icon>
      </v-list-item-icon>
      <v-list-item-title>امر شغل بواكي</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item active-class="active" to="/letters" link>
      <v-list-item-icon>
        <v-icon>mdi-email-plus</v-icon>
      </v-list-item-icon>
      <v-list-item-title>امر شغل اظرف</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item active-class="active" to="/menus" link>
      <v-list-item-icon>
        <v-icon>mdi-note-plus</v-icon>
      </v-list-item-icon>
      <v-list-item-title>امر شغل منيوهات و اعلانات</v-list-item-title>
    </v-list-item>
    <v-list-item active-class="active" to="/consts" link>
      <v-list-item-icon>
        <v-icon>mdi-cog</v-icon>
      </v-list-item-icon>
      <v-list-item-title>الضبط</v-list-item-title>
    </v-list-item>
    <v-subheader>الادارة</v-subheader>
    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-chart-bar</v-icon>
      </v-list-item-icon>
      <v-list-item-title>حسابات (تجريبي)</v-list-item-title>
    </v-list-item>

    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-file</v-icon>
      </v-list-item-icon>
      <v-list-item-title>اوامر الشغل (تجريبي)</v-list-item-title>
    </v-list-item>

    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-home-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-title>المخزن (تجريبي)</v-list-item-title>
    </v-list-item>

    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>المستخدمين (تجريبي)</v-list-item-title>
    </v-list-item>

    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-eye</v-icon>
      </v-list-item-icon>
      <v-list-item-title>واجهة الموقع (تجريبي)</v-list-item-title>
    </v-list-item>

    <v-list-item disabled active-class="active" to="/test" link>
      <v-list-item-icon>
        <v-icon>mdi-file-chart</v-icon>
      </v-list-item-icon>
      <v-list-item-title>تاريخ العمليات (تجريبي)</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<style>
.active {
  color: #1976d2 !important;
}
</style>
