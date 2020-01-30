<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <logo />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h3 class="title">Win Max Factor Makeup!</h3>
        <h5>Fancy winning this stunning collection of Max Factor makeup?</h5>Submit you email address below to enter
      </b-col>
    </b-row>
    <b-row>
      <b-col class="max-image col-12 col-md-6">
        <img src="https://pbs.twimg.com/media/D2nSLayW0AMSNgU.jpg" alt="Win Max Factor Makeup" />
      </b-col>
      <b-col class="formsubmit mt-2 mt-sm-0 p-4 mt-xl-0 col-12 col-md-6" cols="12">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="gdpr">Sign me up for MaxFactor news</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-button type="submit">Submit</b-button>
          <b-button type="reset">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import Logo from "~/components/Logo.vue";
import EntryService from "@/services/EntryService";

export default {
  data() {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "Max Factor Competition February 2020",
          content:
            "Win Max Factor Makeup -- Enter our competition to win a bumper pack of makeup from "
        }
      ],
      entries: [],
      form: {
        email: "",
        name: "",
        checked: []
      },
      show: true
    };
  },
  head() {
    return {
      title: "Max Factor Competition Spring 2020",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "Max Factor Competition February 2020",
          content:
            "Win Max Factor Makeup -- Enter our competition to win a bumper pack of makeup from"
        }
      ]
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const response = await EntryService.postEntry(this.form);
      this.entriesResult = response.data;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
.formsubmit {
  background-color: #e0bba8;
  text-align: left;
}
img {
  width: 100%;
  height: auto;
  
}
.max-image{
  padding-right: 0px;
  padding-left: 0px
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 4rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
