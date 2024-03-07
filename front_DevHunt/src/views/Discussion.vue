<template>
  <section class="pt-5">
    <div class="container shadow section-sm rounded min-Height">
      <div class="row">
        <div class="sideChat col-lg-1">
            <ul>
                <li class=" sidelist c-type" @click="selectPanel('ChatBot')" style="width=55px; height:55px">
                    <img :src="bot" class="mb-4 p-2" :class="panel === 'ChatBot'? 'card-icon-Tools-active' : 'card-icon-Tools'" alt="">
                </li>
                <li class=" sidelist c-type my-2"  @click="selectPanel('Personne')" style="width=55px; height:55px">
                    <img :src="chat" class="mb-4 p-2" :class="panel === 'Personne'? 'card-icon-Tools-active' : 'card-icon-Tools' " >
                </li>
                <li class=" sidelist c-type" @click="selectPanel('Mentor')" style="width=55px; height:55px">
                    <img :src="mentor" class="mb-4 p-2" :class="panel === 'Mentor'? 'card-icon-Tools-active' : 'card-icon-Tools'">
                </li>
            </ul>
        </div>
        <div class="col-lg-4 px-4">
            <h3 class="mb-5">{{panel}}</h3>
            <div v-if="panel !=='ChatBot' ">
                <div class="d-flex search-div mb-4 shadow-input ">
                <input type="text" class="ps-3 flex-grow-1 search-input me-auto text-left">
                <button type="submit" class="search-btn pe-3"><i class="ti-search h5"></i></button>
            </div>
          <ul class="p-2" :class="index == user.id ? 'rounded-user-msg-active' : 'rounded-user-msg'" v-for="user in users" :key="user.id">
            <div class="d-flex align-items-center c-type user-msg" @click="selectUser(user.id)">
                <div><img :src="picture" alt="Avatar" class=" rounded-circle avatar-msg" ></div>
                <div class="mx-3 flex-grow-1 text-left">
                    <li class="user-msg" >{{user.username}}</li>
                    <li class="me-auto text-light">Message</li>
                </div>
                <div v-if="isOnline(user.id)" class="online"></div>
            </div>
          </ul>
            </div>
        </div>
        <div class="col-lg-7 align-items-center">
          <div class="me-5 message">

               <!-- USER TO CHAT -->
              <!--  -->
                <div v-if="user.username ? user.username : true ">
                  <div v-if="panel === 'ChatBot'" class="rounded-5 d-flex align-items-center shadow p-2 mb-4 " style="height:50px">
                    <div ><img :src="bot" alt="Avatar" class=" rounded-circle avatar-msg-clicked" ></div><strong class="ms-3 d-flex ">Assistance IA</strong>  
                  </div>
                  <div v-else class="rounded-5 d-flex align-items-center shadow p-2 mb-4 " style="height:50px">
                    <div ><img :src="picture" alt="Avatar" class=" rounded-circle avatar-msg-clicked" ></div><strong class="ms-3 d-flex ">{{user.username}}</strong>  
                  </div>

                  <!-- CHAT MESSAGE -->
                  <div class=" rounded-5 mb-3 bg-light ">
                    <ul v-if="panel === 'ChatBot'" class="px-3 card-message  list-group rounded-5 " v-chat-scroll="{always: false, smooth: true}">
                      
                      <li v-for="(message,i) in messagesChat" :key="i" :class="{'mt-4' : index == 0}" >
                        <p class=" message-font shadow" :class="[ message.type !== 'bot' ? 'float-end chat-l' : 'chat-r'  ]">
                          {{ message.msg }}
                          <!-- <small>:{{ message.id}}</small>  -->
                          
                        </p>
                      </li>
                    </ul>
                    <ul v-else class="px-3 card-message  list-group rounded-5 " v-chat-scroll="{always: false, smooth: true}">
                      
                      <li v-for="(message, index) in messages" :key="index" :class="{'mt-4' : index == 0}" >
                        <p class=" message-font shadow" :class="[ message.UserId == id ? 'float-end chat-l' : 'chat-r'  ]">
                          {{ message.msg }}
                          <!-- <small>:{{ message.id}}</small>  -->
                          
                        </p>
                      </li>
                    </ul>
                    <div class="search-wrapper align-items-center d-sm-flex " style="background:#fff;">
                        <input id="search-by" name="s" type="text" class="form-control form-control-sm" placeholder="Your message here" style="width:100%; background:transparent" v-model="newMessage" @keypress.enter="sendMessage">
                        <input type="submit" class="btn btn-primary btn-sm" value="Send" @click="sendMessage">
                    </div>
                  </div>
                </div>

                <!--  -->
              <div v-else class="text-center">
                <p  class="message" >Choose an user to chat</p>
              </div>
             
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { backServer } from "@/config/axiosConfig";
import { io }  from "socket.io-client"
import sary from '@/assets/images/avatar.png'
import {bot,chat, mentor} from '@/assets/images/index'

export default {
  data() {
    return {
        bot,chat,mentor,
        picture: sary,
      index: -1,
      id : 1,
      username : 'Rotsy',
    //   id: parseInt(localStorage.getItem("id")),
    //   username: localStorage.getItem("username"),
      panel:'ChatBot',
      user:{},
      room : [],
      users: [
        // {
        //     id: 0,
        //     username: 'RAMANANTSOA Rotsiniaina'
        // },
        // {
        //     id: 1,
        //     username: 'RATSIMBAZAFY Tojoniaina Mbola Safidy'
        // }

        ],
      connectedUsers: [],
      newMessage: null,
      messages: [
        // {
        //     UserId: 1,
        //     msg : 'hello'
        // },
        // {
        //     UserId: 0,
        //     msg : 'hello'
        // }
      ],
      messagesChat:[],
      socket: null
      
    };
  },
  created() {
    
    this.socketConnect()
    this.getUsers()
  },
  beforeDestroy()
  {
      this.disconnect()
  },
  methods: {
    isOnline(index)
    {
      // console.log(index)
      // console.log(this.connectedUsers)
      const online = this.connectedUsers.find((user) => user.UserId === index)
      if(online) return true

      return false
    },
    selectPanel(x)
    {
        this.panel = x
        if(x == 'ChatBot')
        {
            
            this.joinRoom()
        }
    },
    getUsers() {
      backServer
        .get(`/getUsers/${this.id}`)
        .then( (res) => {
           this.users =  [...res.data.user];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectUser(ind) {
      this.user = this.users.find((user) => user.id === ind )
      this.index = ind;
      this.joinRoom(ind)
      this.setRoom(ind)
      this.getMessages()
      
    },
    socketConnect(){
      
    //   socket : io.connect("http://192.168.43.19:4001")

      this.socket = io("http://127.0.0.1:5000")
      this.socket.emit('status',{username: this.username, UserId:this.id})
      this.socket.on('connectedUser', (user) => {
        this.connectedUsers = [...this.connectedUsers, ...user]
      })
    },
    joinRoom(anotherID){
      if(this.panel == 'ChatBot')
      {
        this.socket.emit('join', 'bot')
      }
      else{
        this.socket.emit('join', `${this.id}--with--${anotherID}`)
      }
    //   this.socket.emit('join', `${this.id}--with--${anotherID}`)
    },
    getMessages(){
      this.messages = []
      
      backServer.get(`/getMessage/${this.room}`)
      .then(res => {
        this.messages = [...res.data.msg];

      })

      this.socket.on('receiveMessage',(message) => {
        this.messages = [...this.messages, message]
      })
    },
    sendMessage()
    {
      if(!this.newMessage) return

      if(this.panel === 'ChatBot')
      {
        let msg = { msg: this.newMessage, type: 'user'}
        this.messagesChat = [...this.messagesChat, msg]
        backServer.post('/chat',{message: this.newMessage})
        .then(async res => {
        //   if(res.data.message == 'message stored'){
            const message = await res.data.msg
            // console.log(res.data.msg)
            this.socket.emit('sendMessage', message)
            // console.log(res.data.message)
            this.messagesChat = [...this.messagesChat, message]
            // console.log(this.messages)
        //   }
        })
        .catch(err => {
          console.log(err)
        })
        
        this.newMessage = ''
      }
      else{
        let msg = {UserId : this.id, msg: this.newMessage, room: this.room}
        backServer.post('/sendMessage',msg)
        .then(res => {
          if(res.data.message == 'message stored'){
            // console.log(res.data.msg);
            this.socket.emit('sendMessage', res.data.msg)
            this.messages = [...this.messages, res.data.msg]
            // console.log(this.messages)
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.newMessage = ''
      }

    },
    setRoom(id)
    {
      let data = new Array(this.id,id)
      let unique = [...new Set(data)].sort((a, b) => (a < b ? -1 : 1));

      this.room = `${unique[0]}--with--${unique[1]}`
    },
    disconnect()
    {
      this.socket.emit('leave', this.id)
      this.socket.disconnect()
    },
  },
  
};
</script>
<style scoped>
    .rounded-5{
        border-radius: 5px !important;
    }
    .message{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
    }
    .message-font{
        font-size: 13px;
    }
    .min-Height{

        min-height: 800px;
        max-height: 800px;
    }
    .message-panel{
        min-height: 700px;
        max-height: 700px;
    }
    .card-message{
        min-height: 560px;
        max-height: 560px;
        overflow-y: scroll;
        
    }
    .chat-r{
        
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: #cacaca;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 300px;
        
    }
    .chat-l{
        
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: #ffffff;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 300px;
        
    }
    .online{
        width: 8px;
        height: 8px;
        border-radius:50px;
        background-color: rgb(3, 173, 26);
    }
    .sideChat{
        border-right:1px solid #E2E2E2;
    }
    .active{
        color: var(--baseColor);
    }
    .card-icon-Tools-active {

        background: var(--baseColor);
        color: #fff;
        height: 55px;
        width: 60px;
        line-height: 55px;
        text-align: center;
        font-size: 27px;
        display: block;
        border-radius: 12px !important;
    }
    .card-icon-Tools:hover {
        background: var(--baseColor);
        color: #fff;
        height: 55px;
        width: 60px;
        line-height: 55px;
        text-align: center;
        font-size: 27px;
        display: block;
        border-radius: 12px !important;
    }
    .card-icon-Tools {
        /* backgrounrgb(148, 148, 148)2E2; */
        color: #5c5c5c;
        height: 55px;
        width: 60px;
        line-height: 55px;
        text-align: center;
        font-size: 27px;
        display: block;
        border-radius: 12px !important;
    }
    .search-div{
        /* border: 1px solid #5c5c5c; */
        
        height: 45px;
        border-radius: 25px;
        background: #ffffff;
    }
    .search-input{
        background: transparent;
        border: 0;
    }
    .search-input:focus{
        outline: 0;
    }
    .search-btn{
        background: transparent;
        border: 0;
    }
    .shadow-input{
        box-shadow: 10px 9px 60px rgba(62, 62, 62, 0.102) !important;
    }
    .avatar-msg{
        max-width: 50px;
        min-width: 50px;
    }
    .avatar-msg-clicked{
        max-width: 40px;
        min-width: 40px;
    }
    .user-message{
        position: relative;
        margin-left: 1cm;
    }
    .rounded-user-msg-active{
        background: #1cdd4c69;
        color: #000;
        border-radius: 12px !important;
    }
    .rounded-user-msg:hover{
        background: #1cdd4c69;
        border-radius: 12px !important;
    }
</style>
