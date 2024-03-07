<template>
  <div class="row">
      <div class="col-lg-3">
      <div  class="avatar-container d-smart-none bg-light">
          <label for="formFileLg">
            <img :src="avatar" alt="Avatar" class="avatar-image" >
          </label>
        <div class="avatar-middle">
            Photo
        </div>
      </div>
      </div>
      <div class="col-lg-8">
      <div class="px-lg-5 px-4">
        <h2 class="mb-4 font-weight-medium">Create your own account</h2>
        <div class="content">
            <form class=" sign-up" @submit.prevent="register">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6 ">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" :class="isValid['name'] ? 'is-valid' : 'not-valid'" id="name" placeholder="" @input="inputHandler" required v-model="user['name']" @keyup="inputHandler">
                    <label for="username">Nom</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" :class="isValid['first_name'] ? 'is-valid' : 'not-valid'" id="first_name" placeholder="" @input="inputHandler" required v-model="user['first_name']" @keyup="inputHandler">
                    <label for="username">Prenom</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                  <div class="form-floating mb-3">
                    <select class="form-control" required v-model="user['niveau']" name="" id="niveau" :class="isValid['niveau'] ? 'is-valid' : 'not-valid'" @change="inputHandler">
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="M1">M1</option>
                      <option value="M2">M2</option>
                    </select>
                    <label for="niveau">Niveau</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                  <div class="form-floating mb-3">
                    <select class="form-control" required v-model="user['parcours']" name="" id="parcours" :class="isValid['parcours'] ? 'is-valid' : 'not-valid'" @change="inputHandler">
                      <option value="L1">GB</option>
                      <option value="L2">SR</option>
                      <option value="L3">IG</option>
                      <option value="M1">GID</option>
                      <option value="M2">OCC</option>

                    </select>
                    <label for="parcours">Parcours</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6 col-sm-6 col-xs-6 col-md-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" :class="isValid['email'] ? 'is-valid' : 'not-valid'" id="email" placeholder="" @input="inputHandler" required v-model="user['email']" @keyup="inputHandler" >
                    <label v-if="errorMsg" for="email" class="text-primary text-decoration-underline" >{{errorMsg}}</label>
                    <label v-else for="email">Email</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" :class="isValid['contact'] ? 'is-valid' : 'not-valid'" id="contact" placeholder="" @input="inputHandler" required v-model="user['contact']" @keyup="inputHandler">
                    <label for="contact">Contact</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="isValid['password'] ? 'is-valid' : 'not-valid'" id="password" placeholder="" @input="inputHandler" required v-model="user['password']" @keyup="inputHandler">
                <label for="password">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="isValid['confirmPass'] ? 'is-valid' : 'not-valid'" id="confirmPassword" placeholder="" @input="inputHandler" required v-model="user['confirmPassword']" @keyup="inputHandler">
                <label for="confirmPassword">Confirm password</label>
              </div>
              <div class="mb-5 d-lg-none">
                <label for="formFileLg" class="form-label">Photo</label>
                <input class="form-control form-control-lg" id="formFileLg" @change="fileHandler" type="file" >
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <router-link to="/Sign/In"><span class="mx-2 mx-sm-3 has-acc">déja inscrit ?</span></router-link>
                <button type="submit" class="btn btn-primary" :disabled="isDisable">Inscription</button>
              </div>
            </form>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
  import sary from '@/assets/images/avatar.png'
  import { backServer } from '@/config/axiosConfig'

  export default{
    data() {
      return {
          user:{},
          avatar : sary,
          isValid:{username: false, email: false, password: false, confirmPass: false, file: false},
          isDisable: true,
          sign: this.$route.path,
          errorMsg:'',
          parcours:'',
          niveau:'',

      }
    },
    methods: {
      inputHandler(e){
        switch (e.target.id) {
          case 'name':
              e.target.value.length >0 ? this.isValid['name'] = true : this.isValid['name'] = false
            break;
          case 'first_name':
              e.target.value.length >0 ? this.isValid['first_name'] = true : this.isValid['first_name'] = false
            break;
          case 'niveau':
              e.target.value.length >0 ? this.isValid['niveau'] = true : this.isValid['niveau'] = false
              break;
          case 'parcours':
              e.target.value.length >0 ? this.isValid['parcours'] = true : this.isValid['parcours'] = false
            break;
          case 'contact':
              e.target.value.length  >0 ? this.isValid['contact'] = true : this.isValid['contact'] = false
              break;
          case 'email':
              /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(e.target.value) ? this.isValid['email'] = true : this.isValid['email'] = false
            break;
          case 'password':
              e.target.value.length >=6 ? this.isValid['password'] = true : this.isValid['password'] = false
            break;
          case 'confirmPassword':
              (e.target.value.length >=6 && e.target.value == this.user['password']) ? this.isValid['confirmPass'] = true : this.isValid['confirmPass'] = false
            break;
        }
        
        if(this.isValid['username'] && this.isValid['email'] && this.isValid['password'] && this.isValid['confirmPass'])
        {
          this.isDisable = false
        }else{
          this.isDisable = true
        }
        
      },
      async fileHandler(e){
        let files = e.target.files || e.dataTransfer.files
        if(!files.length) return;
        this.user['image'] = files[0]
        this.createImg(files[0])
        try {
          const response = await backServer.post('/api/updloads', this.user.image)
          this.user['image'] = response.image
          console.log(response.image)   
        } catch (error) {
          console.log(error)
        }
        console.log (this.user['image'])
      },
      createImg(file){
        let reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result
        }
        reader.readAsDataURL(file)
      },
      clearForm(){
        this.errorMsg =''
        this.isDisable = true
        this.isValid.username=this.isValid.email=this.isValid.password=this.isValid.confirmPass=this.isValid.file = false
        this.user = {}
      },

      async createUser(){
        // const formData = new FormData();
        // formData.append('name', this.user.name)
        // formData.append('firstname', this.user.first_name)
        // formData.append('niveau', this.user.niveau)
        // formData.append('parcours', this.user.parcours)
        // formData.append('email', this.user.email)
        // formData.append('contact', this.user.contact)
        // formData.append('password', this.user.password)
        // formData.append('confirmPassword', this.user.confirmPassword)

        try {
          const response = await backServer.post('/api/user/register', this.user)
          console.log('Succes')
        } catch (error) {
          console.log(error)
        }
      }
      
    }
  }
</script>
