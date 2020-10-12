<template>
  <v-card color="red darken-4" dark>
    <v-card-text>
      <v-autocomplete
          v-model="jetModel"
          :items="searchResults"
          :search-input.sync="searchString"
          auto-select-first
          color="white"
          hide-no-data
          item-text="name"
          :label="searchTitle"
          placeholder="Start typing to Search"
          prepend-icon="mdi-airplane"
          return-object
          @input="selectJet"
      ></v-autocomplete>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="dark-grey" @click="randomJet">
        Get Random Jet
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "JetSearch",
  props: ["searchTitle"],
  data: () => ({
    searchResults: [],
    isLoading: false,
    jetModel: null,
    searchString: null,
  }),
  watch: {
    searchString: function (searchString) {
      this.$axios.get("/jet/search/", {
        params: {
          jet_search_name: searchString
        }
      })
          .then(response => this.searchResults = response.data)
    }
  },
  methods: {
    selectJet: function (jet) { this.$emit("jet-selected", jet["slug"])},
    randomJet: function () {
      this.$axios.get("/jet/random/")
          .then(response => this.$emit("jet-selected", response.data["slug"]))
    }
  }
}
</script>
