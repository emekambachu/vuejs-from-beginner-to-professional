new Vue({
    el:'#app',
    data:{
        message: 'Hello World!',
        blogUrl: 'https://xeddtechnology.com',
        movieTitle: 'The Matrix',
        releaseYear: '1999',
        firstName: '',
        lastName: 'Mbachu',
        outputName: ''
    },
    methods:{
        isMovieOld: function(releaseYear){
            return releaseYear < 2000;
        },
        clickMe: function (message) {
            alert('Hey '+ message);
        },
        pressedEnterOrSpace: function () {
            alert('Pressed Enter or space key')
        },
        outputNameKeyup: function (event) {
            this.outputName = event.target.value;
        }
    }
});