<template>
    <button>{{ title }}</button>
</template>

<script>

export default {
  name: 'Button-vue',
  props: ["title"],
} 
</script>

<style>
button{
  background-color: steelblue;
  border: none;
  padding: 1% 3%;
  margin: 2%;
  border-radius: 15px;
  transition: 0.5s;
  cursor: pointer;
}
button:hover{
  background-color: rgb(40, 90, 130);
}

</style>