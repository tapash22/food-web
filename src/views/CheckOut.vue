<template>
<div class="check-out">
    <v-container>
        <v-card>
            <v-card-title class="d-flex justify-center text-h6 text-uppercase">Bill details</v-card-title>
            <v-card-text>
                <v-list class="d-block">
                    <v-list-item class="d-flex justify-space-between">
                        <v-list-item-avatar>
                            <v-img src="https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-1">title</v-list-item-title>
                            <v-list-item-subtitle class="text-body-2">quantity</v-list-item-subtitle>
                        </v-list-item-content>
                          <v-list-item-content>
                            <v-list-item-title class="text-body-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorum!</v-list-item-title>
                        </v-list-item-content>
                        <v-list-title class="text-body-1">price</v-list-title>
                        <v-list-item-icon>
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                    <!-- second -->

                    <v-list-item class="d-flex justify-space-between">
                        <v-list-item-avatar>
                            <v-img src="https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-body-1">title</v-list-item-title>
                            <v-list-item-subtitle class="text-body-2">quantity</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-title class="text-body-1">price</v-list-title>
                        <v-list-item-icon>
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                </v-list>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
                <v-btn class="d-block">payment</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</div>
</template>
