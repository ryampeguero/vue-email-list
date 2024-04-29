const {createApp} = Vue;

createApp({
    data(){
        return{
           mail: "",
        }
    },

    created(){
       
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                console.log(resp.data.response);
                this.mail = resp.data.response;
                });
            
        }
        
    },

    computed: {

    },

    methods: {

    }
    
}).mount("#app");