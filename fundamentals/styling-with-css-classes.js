new Vue({
    el: '#app',
    data: {
        color: 'blue',
        styles: {
            'background-color': 'blue'
        },
        shapeStyles: {},
        employees: [
            { name: 'Abby', title: 'Accountant' },
            { name: 'Andy', title: 'Marketing Manager' },
            { name: 'Brandon', title: 'Vue.js Expert' },
            { name: 'Bob', title: 'Key Account Manager' }
        ],
        companyName: 'VueX Ltd.',
        shapes: [
            {shape: 'circle'},
            {shape: 'square', animate: true},
            {shape: 'triangle', direction: 'up'},
            {shape: 'triangle', direction: 'right', animate: true},
            {shape: 'triangle', direction: 'down'},
            {shape: 'triangle', direction: 'left', animate: true},
        ]
    },
    methods: {
        changeColor: function () {
            if(this.color === 'blue'){
                this.color = 'red';
            }else{
                this.color = 'blue';
            }
        },
        changeShape: function () {
            if(typeof this.shapeStyles['border-radius'] !== 'undefined'){
                Vue.set(this.shapeStyles, 'border-radius', undefined);
            }else{
                Vue.set(this.shapeStyles, 'border-radius', '50%');
            }
        }
    }
})