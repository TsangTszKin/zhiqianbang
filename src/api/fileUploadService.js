import pop from "../utils/pop";
import http from "../config/http";

let getTicket = () => {
  return localStorage.ticket;
};
const prefix = http.gwApiPrefix;
const errorHandler = error => {
  pop.error("文件上传失败，请稍候再试！");
  console.log(error);
};

export default {
  fileUpload(e, type) {
    let file = e.target.files[0];
    let param = new FormData(); //创建form对象
    param.append("file", file, file.name); //通过append向form对象添加数据
    //param.append("chunk", "0"); //添加form表单中其他数据
    //console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
    // param.append("uploadType", "pic");
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }; //添加请求头
    return axios
      .post(
        `${prefix}/api/scapi/zhisuUploadFile?uploadType=${type}&ticket=` +
          getTicket(),
        param,
        config
      )
      .catch(res => {
        errorHandler(res.data);
      });
  },
  resumrUpload(e) {
    let file = e.target.files[0];
    let param = new FormData(); //创建form对象
    param.append("file", file, file.name); //通过append向form对象添加数据
    //param.append("chunk", "0"); //添加form表单中其他数据
    //console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }; //添加请求头
    return axios
      .post(
        `${prefix}/api/resume/upload/pdfToPic?ticket=` + getTicket(),
        param,
        config
      )
      .catch(res => {
        errorHandler(res.data);
      });
  }
};
