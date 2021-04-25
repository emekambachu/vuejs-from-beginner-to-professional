new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        results: [],
        isSearching: false,
        movies: [
            { name: 'The Matrix', year: 1999 },
            { name: 'The Matrix Reloaded', year: 2003 },
            { name: 'The Matrix Revolutions', year: 2003 },
        ],
        message: 'hello world!'
    },
    methods:{
      addMovie: function () {
        this.movies.push({
            name: 'The fast and the Furious',
            year: 2001
        });
      }
    },
    computed: {
        formattedMovies: function(){
            return this.movies.map(function(movie){
                return movie.name + ' (' + movie.year + ')';
            });
        }
    },
    watch:{
        searchQuery: function(query){
            this.isSearching = true;
            let vm = this;
            console.log(this);

            setTimeout(function(){
                vm.results = ['Javascript', 'php', 'mysql'];
                vm.isSearching = false;
            }, 500);
        },
        movies: function(movies){
            let newMovie = movies[movies.length - 1];
            alert(newMovie.name + ' from ' + newMovie.year + ' was just added!');
        }
    },
    filters: {
        uppercase: function (value, onlyFirstCharacter) {
            if(!value){
                return '';
            }
            value = value.toString();
            if(onlyFirstCharacter){
                return value.charAt(0).toUpperCase() + value.slice(1);
            }else{
                return value.toUpperCase();
            }
        },

        uwfirst: function (value) {
            if(!value){
                return '';
            }
            let parts = value.toString().split(' ');
            let uppercasedWords = parts.map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });

            return uppercasedWords.join(' ');
        },

        removeSpaces: function (value){
          if(!value){
              return '';
          }
          return value.toString().replace(/ /g, '');
        }
    }
});