var app = new Vue({
    el: '#root',
    data: {
        current_index: 0,
        immagini:[
            'img/city_one.jpg',
            'img/city_two.jpg',
            'img/city_three.jpg',
            'img/city_four.jpg'
        ]
    },
    methods: {
        next_image(){
            this.current_index += 1;
            if (this.current_index == 4) {
                this.current_index = 0;
            }
        },
        prev_image(){
            this.current_index -= 1;
            if (this.current_index < 0) {
                this.current_index = 3;
            }
        }
    }
});
