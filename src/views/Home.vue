<template>
<div>
    <!-- search -->
    <v-row class="d-flex justify-center">
        <v-col col="10" sm="10" md="8" lg="8" xl="8" class="d-block">
            <v-sheet class="d-flex justify-center">

                <v-icon class="text-h4" color="red">
                    mdi-human-greeting-variant
                </v-icon>

                <h2 class="text-body-1 mx-2 my-5 text-h1 font-weight-medium">Hungry naki?</h2>
            </v-sheet>
            <div class="search">
                <v-text-field class="shrink " dense hide-details outlined hint="search" color="red" append-icon="mdi-crosshairs-gps" />
                <v-btn color="green" large class="text-body-1">Delivery</v-btn>
            </div>

        </v-col>
    </v-row>
    <!-- search end-->

    <!-- resturent -->
    <v-row class="my-2 d-flex justify-space-around">
        <TypeHeader name="Resturent" link="restaurants" />
        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="index in countLength" :key="index" class="my-2 pa-0">
            <Resturent :resturent="resturents[index - 1]" />
        </v-col>
    </v-row>
    <!-- resturent end-->

    <!-- homemade -->
    <v-row class="my-2">
        <TypeHeader name="Home Made" link="homemade" />
        <v-col cols="6" md="3" sm="6" lg="3" xl="3" v-for="index in countLength" :key="index" class="my-2 pa-0">
            <FoodCard :item="homemadeList[index - 1]" />
        </v-col>
    </v-row>

    <!-- homemade end-->

    <!-- readytocook -->
    <v-row class="my-2">
        <TypeHeader name="Ready To Coock" link="readytocook" />
        <v-col cols="6" md="3" sm="6" lg="3" xl="3" v-for="index in countLength" :key="index" class="my-2 pa-0">
            <FoodCard :item="readycoockList[index - 1]" />
        </v-col>
    </v-row>
    <!-- readytocook end-->

    <!-- dryfood -->
    <v-row class="my-2">
        <TypeHeader name="Dry Foods" link="dryfood" />
        <v-col cols="6" md="3" sm="6" lg="3" xl="3" v-for="index in countLength" :key="index" class="my-2 pa-0">
            <FoodCard :item="dryfoodList[index - 1]" />
        </v-col>
    </v-row>
    <!-- dryfood end-->

</div>
</template>

<script>
import TypeHeader from '@/components/TypeHeader.vue';
import Resturent from '@/components/Resturent.vue';
import FoodCard from '@/components/FoodCard.vue';
import {
    mapGetters,
    mapState
} from 'vuex';

export default {
    name: 'home',

    computed: {
        pickerRange() {
            return this.dates.join('~');
        },

        ...mapState('resturents', {
            resturents: 'resturents'
        }),

        ...mapGetters('products', {
            dryfoodList: 'dryfoodList',
            readycoockList: 'readycoockList',
            homemadeList: 'homemadeList'
        }),

        countLength() {
            return Math.min(4, this.resturents.length);
        }
    },

    components: {
        Resturent,
        FoodCard,
        TypeHeader
    },

    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {
        season(value) {
            return this.icons[value];
        },
        onClickResturent() {
            this.$router.push('/restaurants')
        },
        onClickDry() {
            this.$router.push('/dryfood')
        },
        onClickHome() {
            this.$router.push('/homemade')
        },
        onClickRcoock() {
            this.$router.push('/readytocook')
        }

    }
}
</script>

<style scoped>
.search {
    display: grid;
    grid-template-columns: 2fr 100px;
}
</style>
