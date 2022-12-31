<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="6">
        <v-subheader class="d-flex justify-center">Use Range</v-subheader>
        <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
          <template v-slot:prepend>
            <v-text-field v-model="range[0]" hide-details single-line @change="$set(range,0,$event)">

            </v-text-field>
          </template>
          <template v-slot:append>
            <v-text-field v-model="range[1]" hide-details single-line @change="$set(range,1,$event)">

            </v-text-field>
          </template>
        </v-range-slider>
      </v-col>

      <v-col cols="12" lg="6" md="6" sm="6">
        <v-subheader>use step</v-subheader>
        <v-range-slider v-model="value" step="5"></v-range-slider>
        <v-subheader>{{value}}</v-subheader>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12" md="12" lg="12" sm="12">
        <v-subheader>using slots</v-subheader>
        <v-range-slider :tick-labels="seasons" :value="[0,1]" min="0" max="3" ticks="always" tick-size="3">
          <template v-slot:thumb-label="props">
            <v-icon dark>
              {{ season(props.value) }}
            </v-icon>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-space-around">
        <!-- <v-date-picker
      v-model="picker"
      color="green lighten-1"
    ></v-date-picker> -->
        <!-- <v-date-picker
      v-model="picker2"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker> -->
        <v-menu :close-on-content-click="false" offset-y min-width="auto">
          <template v-slot:activator="{on , attrs}">
            <v-text-field v-model="pickerRange" label="Picker without buttons" prepend-icon="mdi-calendar" readonly
              v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="dates" range></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3" lg="3" sm="3">
        <v-select 
        v-model="select" 
        :hint="`${select.state}, ${select.abbr}`" 
        :items="items" 
        item-text="abbr"
        item-value="state" 
        :prepend-icon="mdi-map" 
        label="Select" 
        persistent-hint 
        return-object 
        single-line>
        </v-select>
      </v-col>
      <v-col cols="12" md="3" lg="3" sm="3">
        <v-select :value="value" :items="itemss" chips multiple single-line>

        </v-select>
      </v-col>
      <v-col cols="12" md="3" lg="3" sm="3">
        <v-select
        :items="itemss"
        :menu-props="{ bottom: true, offsetY: true }"
        label="Label"
      ></v-select>
      </v-col>
      <v-col cols="12" md="3" lg="3" sm="3">

      </v-col>

    </v-row>
    <v-row>
      <v-col>

      </v-col>
    </v-row>

    <v-row>
      <FormInput />
    </v-row>


  </v-container>
</template>

<script>
import FormInput from '../components/FormInput.vue';

export default {
  name: 'home',
  data() {
    return {
      select: { state: 'Florida', abbr: 'FL' },
      itemss: [
       'tapash','paul','arpon','tushar'
      ],
      value: [
       'tapash','paul','arpon','tushar'
      ],
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
      // manu:false,
      dates: [],
      // picker: (


      // picker2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      min: -50,
      max: 90,
      range: [-20, 70],
      value: [20, 40],
      seasons: [
        'Winter',
        'Spring',
        'Summer',
        'Fall',
      ],
      icons: [
        'mdi-snowflake',
        'mdi-leaf',
        'mdi-fire',
        'mdi-water',
      ],

    }
  },
  computed: {
    pickerRange() {
      return this.dates.join('~');
    }
  },

  components: {
    FormInput
  },

  methods: {
    season(value) {
      return this.icons[value];
    },


  }
}
</script>
