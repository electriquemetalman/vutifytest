<template>
  <div class="dashboard">
  <Navbar />
    <v-snackbar
        v-model="snackbar"
        :timeout="4000"
        color="success"
        >
        Awesome! you added a new product.

        <template v-slot:action="{ attrs }">
            <v-btn
            color="wite"
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
              Close
            </v-btn>
        </template>
    </v-snackbar>
    <h1>Dashboard</h1>
    <v-container class="my-5">
        <v-flex class="mt-4 mb-3">
          <Popup @productAdded="snackbar = true" />
        </v-flex> 
         <v-layout row wrap>
           <v-flex xs12 sm6 md4 lg3 v-for="product in products" :key="product.name">
             <v-card class="text-xs-center ma-3">
               <v-responsive class="pt-4">
                 <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="white"
                      icon
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                        <Edite />
                    </v-list-item>
                    <v-list-item>
                      <v-btn  @click="remouveProduct(key)">
                        <v-icon dark>
                          mdi-delete
                        </v-icon>
                        Delete
                      </v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>  
                </v-img>
               </v-responsive>
               <v-card-text>
                 <div class="subheading">{{ product.name}}</div>
               </v-card-text>
              </v-card>
           </v-flex>
         </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Popup from '../components/popup.vue';
import Edite from '../components/edite.vue';
import db from '@/fb';

  export default {
    
    components:{ Navbar, Popup, Edite},
    data() {
      return {
        products: [],
        snackbar: false
      }
    },
    /*methods: {
        remouveProduct(key) {
          db.collection('products').child(key).remove;
        }
    },*/
    created() {
      db.collection('products').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.products.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
    
  }
</script>
