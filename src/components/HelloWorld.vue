<template>
  <div class="hello">
    <div class="container" ref="container">
      <el-upload
        ref="upload"
        class="upload-demo"
        drag
        action=""
        :http-request="preventUpload"
        :before-upload="beforeUpload"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <div class="footer">
        <el-button type="primary" @click="handleExcel">开始处理</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import ExcelService from "@/service/ExcelService";

export default class HelloWorld extends Vue {
  // 文件列表
  private fileList: any = [];

  // 阻止默认上传行为
  private preventUpload() {
    return;
  }

  // 文件上传前的钩子
  private beforeUpload() {
    this.fileList = (this.$refs.upload as any).uploadFiles;
  }

  // 处理excel
  private handleExcel(): void {
    for (const file of this.fileList) {
      console.log(file);
      ExcelService.handleExcel(file.raw);
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
