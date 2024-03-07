<template>
    <div class="container">

        <div class="form-group">
            <input class="form-contro" type="text" id="input" v-model="recept">
            <input class="form-contro" type="text" id="input" v-model="message">
            <input type="button" value="send" @click="sendMessage">
        </div>
        <ul>
            <li :key="index" v-for="(msg,index) in messages">{{msg}}</li>
        </ul>
    </div>
</template>
<script>
    import io  from "socket.io-client"

    export default {
        data(){
            return{
                message:'',
                recept:'',
                messages:['Welcome to the chat channel'],
                name: this.$route.params.name,
                room: this.$route.params.room,
                ENDPOINT: 'http://127.0.0.1:3000',
                
                // socket : io.connect("http://192.168.43.19:4001")
                socket: io("http://127.0.0.1:3000")
                
            }
        },
        mounted(){
            this.joinRoom()
            this.getAllMessages()
        },
        watch:{
            
        },
        methods:{

            joinRoom(){
                this.socket.emit('join', {name : this.name, room: this.room}, () => {
                    
                })
            },
            leaveRoom()
            {
                this.socket.emit('disconnect', this.name) // disconnect is a reserved event name
                this.socket.off()
            },
            getAllUsers(){
                
            },
            getAllMessages(){
                this.socket.on('message',(message) => {
                    this.messages.push(message.text)
                })
            },
            sendMessage(){
                
                if(!this.message) return 

                this.socket.emit('sendMessage', this.message)

                this.message=''
            }
        },
        beforeDestroy(){
            this.leaveRoom()
        }
    }

</script>
