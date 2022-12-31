<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12" lg="6" md="6" class="d-flex justify-start">
                <v-text-field v-model="address" placeholder="Enter your address" type="text" ref="autocomplite">
                </v-text-field>
                <v-icon large @click="locatorButtonPressed()">mdi-album</v-icon>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            address: ''
        }
    },
    mounted() {
     
        new google.maps.places.Autocomplete(
            this.$refs["autocomplite"]
        );
    },

    methods: {
        locatorButtonPressed() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.getStreetAddress(position.coords.latitude, position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                }
            )
        },
        async getStreetAddress(lat, long) {
            try {
                var { data } = await axios.get( "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
         lat +
         "," +
         long +
         "&key={AIzaSyBU27GH_jdBjRFEDYmFawm-1iUwCfIhZCU}");
                if (data.error_message) {
                    console.log(data.error_message);
                } else {
                    this.address = data.results[0].formatted_address;
                }

            } catch (error) {
                console.log(error.message);
            }
        }
    }
}
</script>