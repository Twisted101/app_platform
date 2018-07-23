<template>

  <div id="app">
    <RtHeader v-if="$store.state.app.showHeader"></RtHeader>
    <router-view id="router-view"></router-view>
    <RtFooter></RtFooter>
    <AppModal></AppModal>

  </div>

</template>

<script>
import RtHeader from "@/components/RtHeader";
import RtFooter from "@/components/RtFooter";
import AppModal from "@/components/AppModal";

export default {
  name: "App",
  components: {
    RtHeader,
    RtFooter,
    AppModal
  },
  data() {
    return {};
  }
};
</script>

<style>
body{
  background-color: #f4f6f7;
}
#router-view {
  padding-top: 50px;
  width: 90%;
  margin: auto;
}
</style>
