<template>
<div class="dashboard">
    <v-container>
        <!-- card -->
        <v-row>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="card in cards" :key="card.id">
                <DashboardCardHeader :card="card" />
            </v-col>
        </v-row>
        <!-- card end-->

        <!-- chart -->
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class=" d-flex justify-center my-5">
                <apexchart width="400" type="bar" :options="chartOptions" :series="series"></apexchart>

            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class=" d-flex justify-center my-5">
                <apexchart width="400" type="bar" :options="chartOptions" :series="series"></apexchart>
            </v-col>

        </v-row>
        <!-- chart end -->

    </v-container>
</div>
</template>

<script>
import DashboardCardHeader from '../components/DashboardCardHeader.vue';

export default {
    name: 'dashboard',

    data() {
        return {
            cards: [{
                    title: "Total Restaurant",
                    amount: '22',
                    icon: 'mdi-table-chair',
                    color: 'green',
                    percentage: 59
                },
                {
                    title: "Total Food items",
                    amount: '2,222',
                    icon: 'mdi-food-fork-drink',
                    color: 'green lighten-1',
                    percentage: 79
                },
                {
                    title: "Total Delivery",
                    amount: '2,222',
                    icon: 'mdi-truck-delivery-outline',
                    color: 'green  lighten-2',
                    percentage: 69
                },

                {
                    title: "Total Revenue",
                    amount: '2,222',
                    icon: 'mdi-cash',
                    color: 'green lighten-3',
                    percentage: 89
                },
            ],

            chartOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            }]
        }
    },

    components: {
        DashboardCardHeader
    }

}
</script>
