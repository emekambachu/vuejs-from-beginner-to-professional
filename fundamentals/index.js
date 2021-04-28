new Vue({
    el:'#app',
    data:{
        message: 'Hello World!',
        blogUrl: 'https://xeddtechnology.com',
        movieTitle: 'The Matrix',
        releaseYear: '1999',
        firstName: '',
        lastName: 'Mbachu',
        outputName: '',
        html: '<h2>Whats up</h2>',
        itemsInStock: 50,
        ishidden: true,
        movieTitles: [
            'The Matrix',
            'The Matrix: Reloaded',
            'The Matrix: Revolutions'],
        employees: [
            { name: 'Abby', title: 'Accountant' },
            { name: 'Andy', title: 'Marketing Manager' },
            { name: 'Brandon', title: 'Vue.js Expert' },
        ],
        person: {
            firstName: 'Emeka',
            lastName: 'Mbachu',
            age: 30
        }
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