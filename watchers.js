new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        results: [],
        isSearching: false
    },
    watch:{
        searchQuery: function(query){
            this.isSearching = true;
            let vm = this;
            console.log(this);

            setTimeout(function(){
                console.log(vm);
            }, 500);
        }
    }
});