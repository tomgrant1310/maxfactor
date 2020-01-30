<template>
  <div class="container">
    Entry Results
    <b-table  stacked="lg"
          head-variant="unset"
          striped
          :no-border-collapse="noCollapse"
          responsive
          hover 
          :items="results" 
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc">
          </b-table>
  </div>
</template>

<script>
import EntryService from "@/services/EntryService";
export default {
  data() {
    return {
      results: [],
      sortBy: "name",
      sortDesc: false,
    };
  },
  created() {
    this.getresults();
  },
  methods: {
    getresults() {
      EntryService.getEntries()
        .then(response => {
          this.results = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>