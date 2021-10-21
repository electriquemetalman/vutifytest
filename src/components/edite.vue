<template>
  <v-dialog v-model="dialog" max-width="400px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
            <v-icon dark>
                mdi-pencil
            </v-icon>
            Edite
        </v-btn>
    </template>    
        <v-card>
            <v-card-title>
                <h4>Edite a product</h4>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field  label="Product name" v-model="name" :rules="[v => !!v || 'name is required']" required  append-icon="mdi-baby-carriage"></v-text-field>
                    <v-text-field  label="Product image" v-model="image" :rules="[v => !!v || 'image is required']" required append-icon="mdi-camera"></v-text-field>
                    <v-btn  class="blue white--text mx-0 mt-3" @click="submit" :loading="loading">Edit product</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
  </v-dialog>
</template>

<script>
    import db from '@/fb'
    export default {
        data () {
            return {
                dialog: false,
                name:"",
                image:"", 
                loading: false
            }
        },
        methods: {
            submit() {
                //console.log(this.name,this.image);
                    this.loading = true;
                    const product = {
                        name: this.name,
                        image: this.image,
                    }
                    db.collection('products').add(product).then(()=> {
                        console.log('added to db');
                        //this.loading = true;
                        this.dialog = false;
                        this.$emit('productAdded')
                    }) 
                    //db.ref('products')
            
            }
        }
    }
</script>