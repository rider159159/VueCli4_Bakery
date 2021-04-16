<template>
  <!-- bidirectional data binding（双向数据绑定） -->
<div>

<div>test</div>
  <div v-for="n in 2" :key="n" class="loadingShow">
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
  <!-- Or manually control the data synchronization（或手动控制数据流） -->
</div>
</template>

<script>
// you can also register quill modules in the component

import Vue from "vue";
import CKEditor from "ckeditor4-vue";

Vue.use(CKEditor);
export default {
  data() {
    return {
      editorData: "<p>Content of the editor.</p>",
      editorOption: {
        // some quill options
      },
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>
