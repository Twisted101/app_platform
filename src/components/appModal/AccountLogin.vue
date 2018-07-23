<template>
    <div>
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">登录</h4>
        </div>
        <div class="modal-body">
            <input type="text" placeholder="账号" class="form-control">
            <input type="text" placeholder="密码" class="form-control">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">保存</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "AccountLogin",
  data() {
    return {};
  }
};
</script>


<style scoped>
</style>
