<template>
  <div class="input-file-box">
    <div class="alert_bg alert_bg1" @click="closeModal" v-show="showBg"></div>
    <div v-show="showClipImg" class="clip-img-box">
      <div class="clip-img">
        <img :src="imageUrl" alt="" id="img">
        <div class="btn-1">
          <button @click="confirmChange()">确认更换</button>
        </div>
      </div>
    </div>
    <div class="seltPho" v-show="showUploadBtn">
      <div class="cont">
        <h5>选择图片</h5>
        <ul>
          <li>
            <img src="../assets/img/icon26.png"  />从相册
            <input type="file" class="upload_btn" id="file" accept="image/png,image/jpg,image/jpeg" name="homeworkImg" @change="change($event)"  />
          </li>
          <li>
            <img src="../assets/img/icon27.png" />从相机
            <input type="file" class="upload_btn" id="file1" accept="image/*" name="homeworkImg"  />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import service_course from '@/http/services/course.js'
  import axios from 'axios';
  export default {
    name: 'SubmitJob',
    inject: ['reload'],
    data(){
      return{
        showClipImg: false,
        showBg: true,
        showUploadBtn: true,
        imageUrl: '',
        file: ''
      }
    },
    props:['showUpload', 'homeworkInfo'],
    methods:{
      change(event) {
        let file = event.target.files;
        let url = window.URL.createObjectURL(file.item(0));
        this.imageUrl = url;
        this.file = file;
        // if (this.file[0].size > 3 * 1024 * 1024) {
        //   this.$Message.warning('只能上传3M以内的图片哟');
        // } else {
          this.showClipImg = true;
          this.showBg = false;
          this.showUploadBtn = false;
          let image = document.getElementById('img'); //预览对象
          this.clip(event , {
            resultObj: image,
            aspectRatio: 1
          })
        //}
      },
      closeModal(){
        this.showClipImg = false;
        this.showBg = true;
        this.showUploadBtn = true;
        this.$emit("changeShowUpload", false);
      },
      confirmChange(){
        this.showClipImg = false;
        this.showBg = true;
        this.showUploadBtn = true;
        this.$emit("changeShowUpload", false);
        let formdata = new FormData();
        let file = this.dataURLtoFile(this.cropImageData,this.file.item(0).name)
        formdata.append('access-token', this.$cookies.get('access_token'));
        formdata.append('file', file);
        formdata.append('section_id', this.homeworkInfo.section_id);
        formdata.append('course_id', this.homeworkInfo.course_id);
        axios.post("/course/homeworks-upload", formdata, {headers:{'Content-Type':'multipart/form-data'}}).then(res => {
          if (res.status === 200 && res.data.status === 0) {
            this.$Message.success('上传成功');
            this.showClipImg = false;
            this.showBg = true;
            this.showUploadBtn = true;
            this.homeworkInfo.pic_url = res.data.msg;
            this.homeworkInfo.val = false;
            this.$emit("changeShowUpload", this.homeworkInfo);
          }  else {
            this.$Message.warning('上传失败！');
          }
        })
      },
      dataURLtoFile(dataurl, filename) {//将base64转换为文件
          var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
      }
    }
  }
</script>

