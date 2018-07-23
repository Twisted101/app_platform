<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="appModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- 这里是模态框内容 -->
                <accountLogin></accountLogin>
            </div>
        </div>
    </div>
</template>

<script>
import accountLogin from '@/components/appModal/accountLogin'
export default {
  name: "AppModal",
  components:{
      accountLogin
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
