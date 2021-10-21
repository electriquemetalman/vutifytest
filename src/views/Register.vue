<template>
  <div class="Register">
    <v-container class="my-5">
        <v-card class="mx-auto my-12" max-width="384"> 
            <v-card-title>
                <h1 class="grey--text ">Register</h1>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" @submit.prevent="onSignup">
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
                    <v-text-field
                        label="Confirm password"
                        placeholder="......"
                        v-model="cpassword"
                        filled
                        rounded
                        dense
                        required
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[comparePasswords]"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-btn rounded  color="primary" type="submit"> Sing up </v-btn>  
                </v-form>
                <h4 class="grey--text" style="text-align: right; text-decoration: none">you have an account <a href="/">singIn</a></h4>
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
        email:'',
        password: '',
        cpassword: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
                //comparePasswords: comparePasswords 
            }
        }
      },
      computed:{
          comparePasswords (){
              return this.password !== this.cpassword ? 'password do not match' : ''
          },
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
          onSignup() {
            //console.log(this.email, this.password, this.cpassword)
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
          }
      }
  }
</script>