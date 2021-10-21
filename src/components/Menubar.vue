<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                class="blue darken-1"
                permanent
                app
                >   
            <v-list dense>
                <v-list-item>
                    <v-list-item-icon >
                        <v-icon class="white--text">mdi-view-dashboard</v-icon>
                    </v-list-item-icon>
        
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Dashboaed</v-list-item-title>
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
    }
}
</script>