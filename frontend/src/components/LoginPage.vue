<template>
  <div id="loginPage">
    <div id="logo"><span id="logoText">coWin</span><img src="../assets/coin.png" alt=""></div>
    <div id="loginContainer">
      <div id="inputId" class="inputDiv"><b-form-input class="inputLogin" id="input-id" v-model="id" placeholder="Enter ID" required></b-form-input></div>
      <div id="inputPw" class="inputDiv"><b-form-input class="inputLogin" id="input-pass" type="password" v-model="pass" placeholder="Enter Password" required></b-form-input></div>
      <div id="btnLogin"><button id="loginBtn" @click="fget_loginChk">로그인</button></div>
      <div id="btnNew" class="btnMember">회원 가입</div>
      <div id="btnFind" class="btnMember">회원 찾기<router-link to="main">임시</router-link></div>
    </div>
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
  /* div { border: 1px solid black; } */
  tr, th, td { margin: 0; padding: 0; }
  #loginPage { display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center; background-color: #4fc08d; width: 100%; height: 100%; }
  #loginPage > #logo { flex: 6.5 0 0; position: relative; display: flex; justify-content: center; align-items: center; color: white; font-weight: bold; width: 35%; }
  #loginPage > #logo > img { position: absolute; width: 100%; height: 100%; z-index: 1; }
  #loginPage > #logo > #logoText { font-size: 7em;  left: 1.7em; top: 2.5em; z-index: 2; }

  #loginPage > #loginContainer { flex: 3.5 0 0; display: flex; flex-direction: row; align-content: flex-start; flex-wrap: wrap; width: 21%;}  /*width 퍼센ㅌ로*/
  #loginPage > #loginContainer .inputDiv { flex: 2 1 100%; height: 17%; margin-top: 0.2em; }
  #loginPage > #loginContainer .inputDiv .inputLogin { height: 100%; }
  #loginPage > #loginContainer > #btnLogin { flex: 3 1 100%; height: 20%; margin-top: .8em; }
  #loginPage > #loginContainer > #btnLogin > #loginBtn { width: 100%; height: 50px; background-color: white; color: #4fc08d; font-weight: bold; border-radius: 5px; border: 1px solid white; }
  #loginPage > #loginContainer > #btnLogin > #loginBtn:hover { background-color: #4fc08d; color: white; }

  #loginPage > #loginContainer .btnMember { flex: 3 1 50%; text-align: center; background: #4fc08d; border: 1px #4fc08d; color: white; margin-top: 10px; height: 20%; }
  #loginPage > #loginContainer .btnMember:hover { color: #35495E; }
</style>