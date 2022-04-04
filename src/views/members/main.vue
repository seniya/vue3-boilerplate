<template>
  <div>
    <h3>
      로그인 페이지
    </h3>

    <div>
      <p>$store.state.auth.isLoadingSignIn : {{$store.state.auth.isLoadingSignIn}}</p>
      <p>$store.state.auth.doneSignIn : {{$store.state.auth.doneSignIn}}</p>
      <p>$store.state.auth.errorSignIn : {{$store.state.auth.errorSignIn}}</p>
      <p>$store.state.auth.user.token : {{$store.state.auth.user.token}}</p>

      <div v-if="$store.state.auth.user.token && $store.state.auth.user.token !== undefined">
        <p>로그인 되었습니다.</p>
        <p>userId : {{$store.state.auth.user.userId}}</p>
        <p>name : {{$store.state.auth.user.name}}</p>
        <p>lv : {{$store.state.auth.user.lv}}</p>
        <div>
          <input type="button" value="LOGOUT" @click="onClickLogoutBtn">
        </div>
      </div>

      <div v-else>
        <form name="normal-form" @submit.prevent="onSubmitForm">
          <div v-if="formErrors.length > 0">
            <b>Please correct the following error(s):</b>
            <div v-for="(item, index) in formErrors" :key="index">
              <span style="color: red">{{ item.text }}</span>
            </div>
          </div>
          <p>
            <label for="userId">userId : test</label>
            <input type="text" name="userId" id="userId" v-model="userId">
          </p>
          <p>
            <label for="password">password : 1111</label>
            <input type="password" name="password" id="password" v-model="password">
          </p>
          <p>
            <input type="submit" value="LOGIN" :disabled="$store.state.auth.isLoadingSignIn">
          </p>
        </form>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'memberMain',
  components: { },
  setup () {
    return { }
  }
})
</script>
