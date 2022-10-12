const app = Vue.createApp({
    data(){
        return {
            input: "",
            confirmed: ""
        }
    },
    methods: {
        buttonClick(){
            alert("Hello world");
        },
        userInput(event){
            this.input = event.target.value;
        },
        confirmedInput(){
            this.confirmed = this.input;
        }
    }
})

app.mount("#assignment");