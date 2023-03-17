<template>
    <div>
        <h1>Page Not Found!</h1>
        <router-link to="/counter" class="return">counter</router-link>

    </div>
</template>

<script>
export default {
    name: 'counter-vue',
}
</script>
<style>
.return{
    font-weight: bold;
    background-color: steelblue;
    text-decoration: none;
    border: none;
    box-shadow: 5%;
    color: white;
    padding: 1%;
    border-radius: 15px;
    transition: 0.5s;
}
.return:hover{
    background-color: rgb(38, 92, 136);

}
</style>