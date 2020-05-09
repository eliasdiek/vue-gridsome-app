<template>
  <v-content class="gradient-blue quarry-section contact-section">
    <div class="contact-connection-background"></div>
<v-container class="carousel-controls">
        <div class="carousel-number">
          {{ carouselNumber + 1 + "/" + images.length }}
        </div>
        <div class="carousel-delimiters">
          <span class="carousel-timer" :class="{ reset: reset }"></span>
        </div>
        <div class="carousel-buttons d-flex">
          <v-icon color="black" @click="prevCarousel">
            mdi-chevron-left
          </v-icon>
          <v-icon color="black" @click="nextCarousel">
            mdi-chevron-right
          </v-icon>
        </div>
      </v-container>
    <v-container :class="status">
      <ClientOnly>
        <vue-flip :bindWithMe="isFlipped" width="100%">
          <div class="flip-wrapper" slot="front">
            <p class="contact-title">Let's chat</p>
            <v-avatar class="contact-avatar" width="6.25rem" height="6.25rem">
              <g-image src="~/assets/images/image-brendan.jpg" />
            </v-avatar>
            <p class="contact-subtitle">
              👋 Hey there, I'm Brendan.
            </p>
            <p class="contact-content">
              I would be happy to have a converstion and answer any questions
              you may have-himple or complex. Let's talk about your goals and
              challenges in design, development, data and beyond.
            </p>
            <v-layout class="contact-buttons">
              <v-btn
                class="quarry-btn btn-primary contact-btn"
                @click="changeStatus('second-flip')"
              >
                Toss Me An Email
              </v-btn>
              <v-btn
                class="quarry-btn btn-secondary contact-btn"
                @click="changeStatus('third-flip')"
              >
                Schedule a Call
              </v-btn>
            </v-layout>
          </div>
          <div v-if="status === 'second-flip'" class="flip-wrapper" slot="back">
            <v-icon
              color="#0c53c7"
              class="back-icon"
              @click="changeStatus('first-flip')"
            >
              mdi-arrow-left
            </v-icon>
            <v-text-field
              class="contact-field"
              label="Your name"
              v-model="name"
              outlined
            ></v-text-field>
            <v-text-field
              class="contact-field"
              label="Your email"
              v-model="email"
              outlined
            ></v-text-field>
            <v-text-field
              class="contact-field"
              :label="focusedNote ? 'Note' : 'Note(optional)'"
              outlined
              v-model="note"
              @blur="blurNote"
              @focus="focusNote"
            ></v-text-field>
            <v-btn class="quarry-btn btn-primary send-btn" @click="sendData()">
              Send
            </v-btn>
          </div>
          <div v-else class="flip-wrapper" slot="back">
            <v-icon
              color="#0c53c7"
              class="back-icon"
              @click="changeStatus('first-flip')"
            >
              mdi-arrow-left
            </v-icon>
            <iframe
              src="https://meetingbird.com/l/quarrybbinger/intro"
              style="width: 100%; border: none; min-height: 600px;"
            ></iframe>
          </div>
        </vue-flip>
      </ClientOnly>
    </v-container>
  </v-content>
</template>

<script>
import VueFlip from "vue-flip";
const axios = require("axios");

export default {
  name: "constacts",
  components: {
    "vue-flip": VueFlip
  },
  data() {
    return {
      status: "first-flip",
      focusedNote: false,
      name: "",
      email: "",
      note: ""
    };
  },
  computed: {
    isFlipped() {
      return this.status !== "first-flip";
    }
  },
  methods: {
    changeStatus: function(status) {
      this.status = status;
    },
    focusNote: function() {
      this.focusedNote = true;
    },
    blurNote: function() {
      if (!this.note) this.focusedNote = false;
    },
    sendData() {
      const data = {
        email: this.email
      };

      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

      axios
        .post("https://wordpress.dev.quarry.team/mailinglist.php ", data)
        .then(response => {
          console.log(response.data);
          this.changeStatus("first-flip");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
