let app = new Vue({
    el: '#app',
    data: {
      loading: false,
      number: 1,
      searchField: '',
      current: {
        
      },
    },
    methods: {
        async search() {
            try {
              this.loading = true;
              const response = await axios.get('https://openlibrary.org/search.json?q=' + searchField);
              this.current = JSON.parse(response);
              this.loading = false;
            } catch (error) {
              console.log(error);
            }
        },
    },
    computed: {
    
    },
    watch: {
        
    },
  });