const {createApp} = Vue;

createApp({
    data(){
        return{
           mailCont: [],
           counterControl: 0,
        }
    },

    created(){
       
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                console.log(resp.data.response);
                this.mailCont.push(resp.data.response);
                this.counterControl++;
                console.log(this.counterControl);
            });
            
        }
        
    },
    
}).mount("#app");