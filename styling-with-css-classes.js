new Vue({
    el: '#app',
    data: {
        color: 'blue',
        styles: {
            'background-color': 'blue'
        },
        shapes: [
            {shape: 'circle'},
            {shape: 'square'},
            {shape: 'triangle', direction: 'up'},
            {shape: 'triangle', direction: 'right'},
            {shape: 'triangle', direction: 'down'},
            {shape: 'triangle', direction: 'left'},
        ]
    },
    methods: {
        changeColor: function () {
            if(this.color === 'blue'){
                this.color = 'red';
            }else{
                this.color = 'blue';
            }
        }
    }
})