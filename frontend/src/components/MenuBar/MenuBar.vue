<template>
  <b-navbar toggleable="lg" type="dark" variant="info" id="navBar">
    <router-link to="/main" tag="b-navbar-brand"><b-icon icon="house"></b-icon>&nbsp;&nbsp;HOME</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/analysis/month" tag="b-nav-item">가계 분석</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" @click="fset_logoutAction">로그아웃</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    fset_logoutAction() {
      localStorage.removeItem('loginInfo')
      location.href = '/'
    }
  }
}
</script>

<style>
.bg-info {background-color: #4fc08d !important;}
#navBar {height: 5.7vh !important; box-sizing: border-box;}
</style>