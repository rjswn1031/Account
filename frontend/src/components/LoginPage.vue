<template>
  <div id="loginPage">
    <img id="logo" src="../assets/coin.png" alt="">
    <div id="logoText" class="mx-auto">coWin</div>
    <table class="mx-auto" id="loginContainer">
      <tr>
        <td colspan="2"><b-form-input class="loginInput" id="input-id" v-model="id" placeholder="Enter ID" required></b-form-input></td>
      </tr>
      <tr>
        <td colspan="2"><b-form-input class="loginInput" id="input-pass" type="password" v-model="pass" placeholder="Enter Password" required></b-form-input></td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="loginBtn" @click="fget_loginChk">로그인</button>
        </td>
      </tr>
      <tr>
        <td><button id="newMember" class="memberBtn">회원 가입</button></td>
        <td><button id="findMember" class="memberBtn">회원 찾기</button></td>
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
        console.log(res);
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
.loginInput {height: 50px !important; color: #4fc08d !important; }

#loginPage {background-color: #4fc08d; width: 100%; height: 100%; box-sizing: border-box; text-align: center;}
#loginContainer {position: absolute; width: 30vw; height: 33vh; left: 35vw; top: 50vh; border-radius: 5px;}

#logo {margin-top: 10vh; background-color: #4fc08d; width: 500px; height: 500px; opacity: 0.5;}
#logoText {position: absolute; top: 200px; width: 100vw; color: white; font-weight: bold; font-size: 100px; text-align: center; margin-top: 10vh;}
#loginBtn {width: 100%; height: 50px; background-color: white; color: #4fc08d; font-weight: bold; border-radius: 5px; border: 1px solid white; margin-top: 5px;}
#loginBtn:hover {background-color: #4fc08d; color: white;}

.memberBtn {background: #4fc08d; border: 1px #4fc08d; color: white; margin-top: 10px;}
.memberBtn:hover {color: #35495E;}

</style>