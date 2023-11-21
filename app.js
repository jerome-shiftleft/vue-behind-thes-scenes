const app = Vue.createApp({ 
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');
