<template>
    <div>
        <div class="func">
            <button class="btn btn-primary createapp" @click="createApp">
                <span style="font-weight:900;font-size:16px;">+ </span>创建应用
            </button>
            <div class="searchapp">
                <input type="text" placeholder="搜索应用" class="form-control">
                <i class="glyphicon glyphicon-search"></i>
            </div>
        </div>
        <div class="app-content">
            <div class="app-tab">
                <div v-for="value in tabArr" :key="value.code" :class="{selected:value.isSelected}" @click="switchTab(value.code)">
                    <span>{{value.name}}</span>
                </div>
            </div>
            <div class="app-condition">
                <div v-for="option in conditionArr" :key="option.value" @click="switchConditionArr(option.value)">
                    <input type="radio" :value="option.value" v-model="appConditionRadio">
                    <span for="one">{{option.name}}</span>
                </div>
            </div>
            <div class="app-table">
                <table id="appTable" data-pagination="true" data-striped="true" data-side-pagination="server" data-cache="false" data-url="/app" data-method="POST" data-page-list="[10,20,50,100]" data-toolbar="#reportToolbar" data-show-refresh="true">
                    <thead>
                        <tr>
                            <th data-field="state" data-checkbox="true"></th>
                            <th data-field="name">应用</th>
                            <th data-field="id">APPID</th>
                            <th data-field="download">下载量</th>
                            <th data-field="status">状态</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RtIndex",
  data() {
    return {
      tabArr: [
        {
          name: "驱动",
          code: "drive",
          isSelected: true
        },
        {
          name: "微应用",
          code: "microApp",
          isSelected: false
        },
        {
          name: "微工具",
          code: "micoTool",
          isSelected: false
        }
      ],
      appConditionRadio: 1,
      conditionArr: [
        {
          value: 1,
          name: "全部应用"
        },
        {
          value: 2,
          name: "已上线"
        },
        {
          value: 3,
          name: "审核中"
        },
        {
          value: 4,
          name: "审核未通过"
        },
        {
          value: 5,
          name: "未提交审核"
        },
        {
          value: 6,
          name: "已下线"
        }
      ]
    };
  },
  beforeCreate: function() {
    this.$store.state.app.showHeader = true;
  },
  mounted: function() {
    $("#appTable").bootstrapTable();
    $("#deviceListTable").bootstrapTable();
  },
  methods: {
    createApp() {
      this.$router.push({ name: "createApp" });
    },
    switchTab(code) {
      for (var value of this.tabArr) {
        value.isSelected = false;
        if (code == value.code) {
          value.isSelected = true;
        }
      }
    },
    switchConditionArr(value) {
      this.appConditionRadio = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.func {
  height: 36px;
  margin-top: 30px;
}
.func .createapp {
  float: left;
  width: 120px;
  height: 100%;
}
.func .searchapp {
  position: relative;
  float: right;
  height: 100%;
}
.func .searchapp input {
  width: 200px;
  height: 100%;
  padding-right: 30px;
}
.func .searchapp i {
  font-size: 16px;
  position: absolute;
  top: 11px;
  right: 10px;
  cursor: pointer;
  color: #999999;
}
.func .searchapp i:hover {
  color: #666666;
}
.app-content {
  clear: both;
  width: 100%;
  margin-top: 30px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  color: #526170;
}
.app-content .app-tab {
  height: 40px;
  color: #888888;
  border-bottom: 1px solid #dddddd;
  user-select: none;
}
.app-content .app-tab > div {
  font-size: 16px;
  line-height: 39px;
  float: left;
  width: 120px;
  cursor: pointer;
  text-align: center;
}
.app-content .app-tab > div span {
  display: block;
  border-right: 1px solid #dddddd;
  background-color: #f4f6f7;
}

.app-content .app-tab div.selected span {
  font-weight: 900;
  line-height: 38px;
  height: 41px;
  margin-top: -1px;
  color: #337ab7;
  border-top: 3px solid #337ab7;
  border-bottom: 0px;
  background-color: #ffffff;
}

.app-content .app-condition {
  cursor: default;
  margin: 20px 0 20px 0;
}
.app-content .app-condition > div {
  display: inline-block;
  margin-left: 20px;
}
.app-content .app-condition > div input {
  vertical-align: middle;
  margin-top: 0;
  margin-right: 2px;
  padding-top: 0 !important;
}
.app-content .app-condition > div span {
  vertical-align: middle;
}
</style>
