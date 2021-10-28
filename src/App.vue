<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <table border="1" class="table" v-columns-resizable>
    <thead>
      <tr>
        <th width="50%">name</th>
        <th width="25%">age</th>
        <th width="25%">gender</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>20</td>
        <td>male</td>
      </tr>
      <tr>
        <td>Emma</td>
        <td>18</td>
        <td>female</td>
      </tr>
      <tr>
        <td>Peter</td>
        <td>21</td>
        <td>male</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
