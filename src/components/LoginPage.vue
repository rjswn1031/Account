<template>
  <div id="loginPage">
      <table id="loginContainer">
        <tr>
          <td>ID</td>
          <td><b-form-input id="input-id" placeholder="Enter ID" required></b-form-input></td>
        </tr>
        <tr>
          <td>PassWord</td>
          <td><b-form-input id="input-pass" type="password" placeholder="Enter Password" required></b-form-input></td>
        </tr>
        <tr>
          <button>로그인</button>
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

}
</script>

<style>
#loginPage {background-color: #4fc08d; width: 100vw; height: 100vh; box-sizing: border-box; text-align: center;}
#loginContainer {background-color: #f2f2f2; width: 30vw; height: 33vh;}
</style>