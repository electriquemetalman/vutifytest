<template>
  <div class="login">
    <v-container class="my-5 " >
        <v-card class="mx-auto my-12" max-width="384"> 
            <v-card-title>
                <h1 class="grey--text ">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" @submit.prevent="onSignin">
                    <v-text-field
                        label="email"
                        placeholder="exemple@exeple.com"
                        v-model="email"
                        filled
                        rounded
                        dense
                        append-icon="mdi-email"
                        :rules="[rules.required]"
                        type="email"
                    ></v-text-field>
                    
                    <v-text-field
                        label="password"
                        placeholder="......"
                        v-model="password"
                        filled
                        rounded
                        dense
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-btn rounded  color="primary" type="submit"> Login </v-btn>  
                </v-form>
               <h4 class="grey--text" style="text-align: right; text-decoration: none">you dont have and accounte <a href="/register">singUp</a></h4>
            </v-card-text>
        </v-card>
    </v-container>
  </div>
</template>

<script>

    export default {
      data () {
        return {
        show1: false,
        isLogin: false,
        email:'',
        password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            }
        }
      },
      computed:{
          user (){
              return this.$store.getters.user
          }
      },
      watch: {
          user (value){
              if (value !== null && value !== undefined) {
                  this.$router.push('/dashboard')
              }
          }
      },
      methods: {
          onSignin() {
              //console.log(this.email, this.password)
              this.$store.dispatch('signUserIn', {email: this.email, password: this.password});
              this.isLogin = true 
          }
      }
    }
</script>