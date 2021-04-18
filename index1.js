new Vue({
    el:'#app',
    data:{
        persons: [
            {id: 1, name: 'Andy'},
            {id: 2, name: 'Abby'},
            {id: 3, name: 'Teresa'},
        ],
        numbers: [1, 2, 3, 4, 5, 6, 7],
        password: '',
        categories: [
            { name: 'Javascript', sub: ['Vue.js', 'React', 'Angular2'] },
            { name: 'Databases', sub: ['MySQL', 'PostgreSQL', 'MariaDB'] },
            { name: 'Operating Systems', sub: ['macOS', 'Linux', 'Windows'] },
        ],
        counter: 1,
        firstName: "Emy",
        lastName: "Mba"
    },
    methods:{
      changeName: function(){
          this.firstName = 'Mark';
          this.lastName = 'Greyson';
      },
        changeNameSetter: function(){
            this.fullName = 'Mark Greyson';
        },
    },
    computed:{
        addNewPerson: function () {
            let highestId = Math.max.apply(Math, this.persons.map(function (p) {
                return p.id;
            }));
            let names = ['Billy', 'Michael', 'Steve', 'Diane', 'Peter'];

            this.persons.push({
                id: highestId + 1,
                name: names[Math.floor(Math.random() * names.length)]
            });
        },
        shuffle: function () {
            this.persons = this.shuffleArray(this.persons);
        },
        shuffleArray: function (arr) {
            let newArr = arr.slice();

            for(let i = newArr.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
            return newArr;
        },

        changeNumber: function () {
            Vue.set(this.numbers, 1, 10);
            alert(this.numbers[1]);
        },

        fullName: {
            get: function(){
                alert("Assembling full name.......");
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue){
                alert("Setting new name: "+newValue);
                let parts = newValue.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[parts.length - 1];
            },
        }
    }
});