<template>
  <Layout>
    <div class="contact">
      <div class="services-hero-section gradient-blue">
        <v-container data-aos="fade-right">
          <h1 class="h1">
            Want to work with us?
          </h1>
          <p class="hero-text">
            We love making new friends and discussing new ideas.
          </p>
          <p class="hero-text">
            If you have something in mind, <br />
            please drop us a line so we can have a chat!
          </p>
        </v-container>
      </div>
      <contact-schedule class="margin-services-contact contact-page" />
      <v-container class="contact-detail-section" data-aos="fade-right">
        <div class="contact-connection-background"></div>
        <div class="contact-detail-block">
          <h3 class="detail-title">What happens next?</h3>
          <div>
            <div class="detail-text">
              <span>1</span>
              <p>
                We have an initial conversation to discuss the basics of your
                project or idea, your organization, and your needs.
              </p>
            </div>
            <div class="detail-text">
              <span>2</span>
              <p>
                Corpus callosum a still more glorious dawn awaits quasar with
                pretty stories for which there's little good evidence hydrogen
                atoms Drake Equation.
              </p>
            </div>
            <div class="detail-text">
              <span>3</span>
              <p>
                Trillion Sea of Tranquility bits of moving fluff gathered by
                gravity emerged into consciousness across the centuries.
              </p>
            </div>
          </div>
        </div>
      </v-container>
      <Footer />
    </div>
  </Layout>
</template>

<script>
import ContactSchedule from "../components/ContactSchedule";
import Footer from "../components/Footer";

export default {
  metaInfo: {
    title: "Contact | Diek Technologies LLC"
  },
  components: {
    ContactSchedule,
    Footer
  }
};
</script>
