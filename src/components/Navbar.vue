<template>
    <nav>

        <v-toolbar flat app class="blue" >
           
            <!--<v-icon class="white--text" @click="drawer = !drawer">mdi-menu</v-icon>-->
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Todo</span>
                <span>Test</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="blue darken-1 white--text" @click="logout">
                <span>Log out</span>
                <v-icon right>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
  
        <v-navigation-drawer
                v-model="drawer"
                class="blue darken-1"
                app
                >   
            <v-list dense>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 
                    <v-list-item-icon >
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
        
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <!--<v-list>
                <v-list-title>
                    <v-list-title-content>
                        <v-list-tile-title>Dashboard</v-list-tile-title>
                    </v-list-title-content>
                </v-list-title>
            </v-list>-->
        </v-navigation-drawer>
        
        <!--<v-navigation-drawer v-model="drawer" class="pink">
        </v-navigation-drawer>-->
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    },
    computed:{
          links (){
              let links = []
              if (this.userIsAuthenticate){
                links = [
                    {icon:'mdi-view-dashboard', text:'Dashboard', route:'/dashboard'},
                    {icon:'mdi-folder', text:'My project', route:'/projects'},
                    {icon:'mdi-account-group-outline', text:'Team', route:'/Team'}
                ]
              }
              return links
          },
          userIsAuthenticate(){
              return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          },
          user (){
              return this.$store.getters.user
          }
    },
    watch: {
        user (value){
            if (value === null || value === undefined) {
                this.$router.push('/')
            }
        }
    },
    methods: {
          logout() {
            this.$store.dispatch('logOut');
          }
    }
}
</script>