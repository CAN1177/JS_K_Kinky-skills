 import axios from "axios";
 
 
 axios.get('/api/Yixiantong/getHomeDatas').then(({ data }) => {
  console.log(data);
})