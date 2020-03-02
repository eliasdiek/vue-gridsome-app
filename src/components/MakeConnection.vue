<template>
  <div class="cases-connection-wrapper">
    <div class="cases-connection-background"></div>
    <v-container class="cases-connection-section">
      <div class="cases-make-connection">
        <h3>Make the connection</h3>
        <p>
          Prime number explorations corpus callosum decipherment the only home
          we've ever known rich in heavy atoms. Tendrils of gossamer clouds
          another world
        </p>
        <v-row class="align-center">
          <v-btn class="quarry-btn btn-primary start-conversation" @click="() => $router.push('/contact')">
            Start a Conversation
          </v-btn>
          <g-link to="/services" class="learn-more">Learn More</g-link>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
