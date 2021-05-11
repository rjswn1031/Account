<template>
  <div id="loginPage">
      <table id="loginContainer">
        <tr>
          <td>ID</td>
          <td><b-form-input id="input-id" v-model="id" placeholder="Enter ID" required></b-form-input></td>
        </tr>
        <tr>
          <td>PassWord</td>
          <td><b-form-input id="input-pass" type="password" v-model="pass" placeholder="Enter Password" required></b-form-input></td>
        </tr>
        <tr>
          <button @click="fget_loginChk">로그인</button>
        </tr>
        <tr>
          <button>회원가입</button>
        </tr>
        <router-link to="main">임시</router-link>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      pass: '',
    }
  },
  created() {
  },
  methods: {
    fget_loginChk() {
      this.$http.get('/api/member/'+ this.id +'/' + this.pass).then((res) => {
        if(res.data.length >= 1) {
          localStorage.setItem('loginInfo', JSON.stringify(res.data));
          location.href = '/main';
        } else {
          alert('아이디 및 비밀번호가 틀립니다.');
        }
      });
    }
  }
}
</script>

<style>
#loginPage {background-color: #4fc08d; width: 100vw; height: 100vh; box-sizing: border-box; text-align: center;}
#loginContainer {background-color: #f2f2f2; width: 30vw; height: 33vh;}
</style>