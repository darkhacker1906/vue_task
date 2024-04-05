<template>
  <counter-app
    :count="counter"
    @increase="handleIncrease"
    @decrease="handleDecrease"
  />
</template>
<script>
import CounterApp from "../components/CounterApp.vue";
export default {
  components: { CounterApp },
  name: "ParentComp",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleIncrease() {
      this.counter++;
    },
    handleDecrease() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
</style>