<template>
  <div class="page-layout">
    <div class="page-header-wrapper">
      <PageHeader />
    </div>
    <router-view class="sub-page"></router-view>
  </div>
</template>

<script>
import PageHeader from "@/components/page-header.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style lang="less" scoped>
.page-layout {
  height: 100%;
}
.sub-page {
  position: relative;
  height: 100%;
}
</style>