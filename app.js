const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: ''
    };
  },
  computed: {
    fullName(){
      if(this.firstName === '' || this.lastName === ''){
        return ''
      }else{
        return this.firstName + ' ' + this.lastName
      }
    }
  },
  methods: {
    add(num){
      this.counter = this.counter + num;
    },
    remove(num){
      this.counter = this.counter - num;
    },
    resetEntries(){
      this.counter = 0,
      this.firstName= ''
      this.lastName= ''
    },
   
  } 
});

app.mount('#events');
