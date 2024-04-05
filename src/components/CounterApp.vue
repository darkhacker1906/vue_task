<template>
  <div class="main_div">
    <div class="center_div">
      <h1>Counter App</h1>
      <div class="flex">
        <button @click="handleIncrease()">Increment</button>
        <p>{{ count }}</p>
        <button @click="handleDecrease()">Decrement</button>
      </div>
      <div class="d-count">
        <p ref="count">Doubled count: {{ doubledCount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterApp",
  props: {
    // count: String,
    // increase: Function,
    // decrease: Function,
  },
  // data(){
  //   return{
  //   count:this.$store.state.count,
  //   }
  // },
  methods: {
    handleIncrease() {
      // this.$emit("increase");
      this.$store.dispatch("increase");
    },
    handleDecrease() {
      // this.$emit("decrease");
      this.$store.dispatch("decrease");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubledCount() {
      return this.count * 2;
    },
  },

  // mounted() {
  //   console.log("Component has been mounted", this.$el);
  // },
  // beforeMount() {
  //   console.warn("Not mounted yet", this.$el);
  // },
  // unmounted() {
  //   console.log("Component has not been mounted yet");
  // },
  beforeUpdate() {
    console.warn("beforeUpdate",this.$refs['count'].textContent);
  },


  updated(){
    console.warn("updated",this.$store.state.count);
  }
};
</script>

<style scoped>
.main_div {
  height: 100vh;
  overflow-y: hidden;
  background: rgb(191, 191, 229);
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
  width: 180px;
  height: 30px;
  justify-content: space-between;
}
p {
  margin: 0px;
  display: flex;
  align-items: center;
}
.d-count {
  margin-top: 10px;
}
</style>