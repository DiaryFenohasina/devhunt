<template>
    <!-- <div class="container">
        <div div class="card bg-light shadow" style="width:450px; height:550px">
            <div class="card-header">
                <p>Ramanantsoa Rotsiniaina</p>
            </div>
            <div class="card-body">
                <ul>
                    <li>Hi</li>
                    <li>Hello</li>
                </ul>
            </div>
            <div class="card-footer" style="height:60px; overflow:hidden">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex consectetur enim in mollitia maiores magni dolorum a minus ducimus, harum fugiat eveniet soluta impedit, placeat inventore! Animi, delectus reprehenderit.</p>
            </div>
        </div>
    </div> -->
    
    <div>
        <p>{{msg}}</p>
        <form action="" id="form" @submit="sendMessage">
            <input type="text" id="input" v-model="data">
            <input type="submit">
        </form>
    </div>
</template>
<script>
    import { io } from "socket.io-client" 
    import axios from "axios"

    export default {
        data(){
            return{
                msg:'',
                data:'',
                name: this.$route.params.name,
                room: this.$route.params.room,
                // ENDPOINT: 'http://127.0.0.1:3000',
                
                // socket : io.connect("http://192.168.43.19:4001")
                
            }
        },
        mounted(){
            let socket = io("http://127.0.0.1:3000")
            console.log(socket)
        },
        watch:{

        },
        methods:{
            // socketGet(){
            //     this.socket.on('connection',(msg)=>{
            //         console.log('bbebebbb ',msg)
                    
            //         // this.msg = msg
            //         this.socket.emit('chat message','socket Get');
            //     })
            // },
            sendMessage(e){

                if(this.data != null)
                {
                    e.preventDefault()
                    this.socket.emit("chat message",this.data);

                    this.data = null
                }
                this.socket.on('chat message',(msg)=>{
                    console.log('back :',msg)
                    this.msg = msg
                    // console.log(msg)
                    // this.msg = msg
                    // this.socket.emit('chat message','kindy');
                })
                
            }
    }
    }

</script>
