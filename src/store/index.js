import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    musicList: []
  },
  mutations: {
    Ajax(state,{type:type, url:url, data:data, success:success, failed:failed}){
      // 创建ajax对象
      console.log(type,url,data)
      var xhr = null;
      if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }

      var type = type.toUpperCase();
      // 用于清除缓存
      var random = Math.random();

      if(typeof data == 'object'){
        var str = '';
        for(var key in data){
          str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, '');
      }

      if(type == 'GET'){
        if(data){
          xhr.open('GET', url + '?' + data, true);
        } else {
          xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();

      } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
      }

      // 处理返回数据
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            success(xhr.responseText);
          } else {
            if(failed){
              failed(xhr.status);
            }
          }
        }
      }

    },
    search(state,_song){
        console.log(this)
        this.Ajax(  //Ajax(type, url, data, success, failed)
        'get',
        'https://api.imjad.cn/cloudmusic/',
        _song,
        function(data){
          data = JSON.parse(data);
          state.musicList = data.result.songs;
        },
        function(error){
          alert(error)
        });
    }
  },
  actions:{
    search ({commit,state},_song){
      console.log(_song)
      commit('Ajax',{
        type:'get',
        url:'https://api.imjad.cn/cloudmusic/',
        data:_song,
        success:function(data){
          data = JSON.parse(data);
          state.musicList = data.result.songs;
        },
        failed:function(error){
          alert(error)
        },
       });
    }
  }

})
