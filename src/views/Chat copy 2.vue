<template>
    <div class="container p-5">
        <div class="col-lg-6 ofset-lg-3">
          <div>
            <p v-for="(user, i) in users" :key="i">
              {{ user.username }} {{ user.type }}
            </p>
          </div>
    
          <div class="card bg-light">
            <div class="card-header text-white">
              <h4> User 1 <span class="float-end">connections</span> </h4>
            </div>
            <ul class="list-group list-group-flush text-end">
              <li class="list-group-item" v-for="(message, index) in messages" :key="index" >
                <span :class="{ 'float-start': message.type === 1 }">
                  {{ message.message }}
                  <small>:{{ message.user }}</small>
                </span>
              </li>
            </ul>
    
            <div class="card-body bg-white">
              <form>
                <div class="form-group d-flex">
                  <input type="text" class="form-control" v-model="newMessage" placeholder="Enter message here" />
                  <input type="button" class="btn btn-sm btn-primary" style="height:50px;" value="send" >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
  import { backServer } from '@/config/axiosConfig'

    export default {
        data(){
            return{
                id: localStorage.getItem('id'),
                username: localStorage.getItem('username'),
                users: [
                  {
                      id: 6,
                      username: "Toky",
                      email: "toky@gmail.com"
                  },
                  {
                      id: 7,
                      username: "Kenny",
                      email: "kenny@gmail.com"
        }
                ],
                newMessage: null,
                messages: [
                    {message:'bonjour', user:'Rotsy',type : 1},
                    {message:'De akory', user:'Diary', type : 0},
                    {message:'cava',user:'Rotsy', type : 1}
                ]
            }
        },
        created(){
        },
        mounted(){
          // this.getUsers()
        },
        methods:{
          getUsers(){
            backServer.get(`/getUsers/${this.id}`)
              .then(res => {
                  console.log(...res.data.user);
                  console.log(res.data.user);
                  this.users = res.data
              }).catch(err => {
                  console.log(err);
              })
          }
        }
    }
</script>
