<template>
    <div class="counter_container">
        <h1>Altschool Third Semester Exam By Igweokolo Davidson</h1>
        <div class="flex">
            <p class="question">Question 2: Create a new vue js application using the cli then setup a counter composable
                with increment,
                decrement, reset, setValue functions with a valid UI. You can use local state or vuex for state management
                albeit using vuex will attract higher marks. Make sure to house your functionality in a page with route -
                ‘/counter’ any other route should redirect the user to a 404 page handled by your wildcard route.</p>

            <ul class="breakdown">
                <li>Create a new vue js application using the cli</li>
                <li>setup a counter composable with increment, decrement, reset, setValue functions with a valid UI</li>
                <li>use local state or vuex for state management albeit using vuex will attract higher marks</li>
                <li>Make sure to house your functionality in a page with route - ‘/counter’ </li>
                <li>any other route should redirect the user to a 404 page handled by your wildcard route.</li>
            </ul>

        </div>
        <h1>Count : {{ getCount }}</h1>
        <div>
            <Button title="increament" @click="increament(1)" />
            <Button title="decreament" @click="decreament(1)" />
        </div>

        <Button title="reset" @click="reset(0)" />
        <input type="number" v-model="text" placeholder="enter value" />
        <Button title="setVal" @click="setVal(+text)" />
    </div>
</template>
    
<script>
import Button from './Button.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    components: { Button },
    name: 'counter-vue',
    props: {
        msg: String
    },
    computed: {
        ...mapGetters(['getCount'])
    },
    methods: {
        ...mapActions(['increament', 'decreament', 'reset', 'setVal'])
    }
}
</script>

<style>
input {
    border: 1px solid black;
    padding: 1% 3%;
    outline: none;
    border-radius: 15px;

}

input:focus {
    outline: none;
    background-color: rgb(135, 135, 135);
}

.counter_container {
    border: 0px solid gold;
}

.flex {
    display: flex;
}

.question {
    border: 1px solid steelblue;
    background-color: grey;
    color: black;
    padding: 4%;
    width: 30%;
    text-align: left;
}

.breakdown {
    border: 1px solid steelblue;
    padding: 4%;
    width: 50%;
    text-align: left;
}
</style>
    