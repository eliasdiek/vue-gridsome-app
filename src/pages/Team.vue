<template>
  <Layout>
    <div class="team">
      <div class="team-hero-section">
        <v-container data-aos="fade-right">
          <h1 class="h1">
            Good work<br />
            with good people.
          </h1>
          <p class="hero-text">
            Quarry is a group of passionate and curious individuals who are
            excited about crafting great digital products and experiences.
          </p>
        </v-container>
      </div>
      <div class="team-hero-image-section">
        <v-container class="team-hero-img-section" data-aos="fade-left">
          <v-img
            class="team-hero-image"
            :src="team_hero_image"
            :cover="true"
            aspect-ratio="1"
            width="100%"
            max-height="739"
          />
        </v-container>
      </div>
      <v-container class="team-descriptive-section">
        <div class="team-descriptive-section-wrapper">
          <h4 class="block-title">
            As a patch of light light years vastness is bearable only through
            love brain is the seed of intelligence
          </h4>
          <p>
            laws of physics vanquish the impossible. Apollonius of Perga
            something incredible is waiting to be known the only home we've ever
            known courage of our questions kindling the energy hidden in matter
            another world? The ash of stellar alchemy star stuff harvesting star
            light rings of Uranus citizens of distant epochs white dwarf a still
            more glorious dawn awaits and billions upon billions upon billions
            upon.
          </p>
        </div>
      </v-container>

      <div class="team-values-section">
        <div class="team-values-background"></div>
        <v-container class="team-values-section-wrapper">
          <h3 class="detail-title">Our values</h3>
          <div class="values-detail-block">
            <div>
              <h4 class="sub-title">UIX Design</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
              <h4 class="sub-title">UI Copywriting</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
              <h4 class="sub-title">Information Architecture</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
            </div>
            <div>
              <h4 class="sub-title">Voice Design</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
              <h4 class="sub-title">Brand & Identity Design</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
              <h4 class="sub-title">Visual & Creative Design</h4>
              <p>
                With pretty stories for which there's little good evidence
                tesseract at the edge of forever laws of physics great turbulent
                clouds
              </p>
            </div>
          </div>
        </v-container>
      </div>

      <div class="team-members-section">
        <v-container class="team-members-section-wrapper">
          <h3 class="block-title">The team</h3>
          <div class="section-body">
            <v-row no-gutters justify="center">
              <v-col
                cols="6"
                sm="3"
                v-for="(person, index) in members"
                :key="index"
              >
                <Person :person="person" />
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>

      <div class="team-distributed-section">
        <div class="team-distributed-background"></div>
        <v-container class="team-distributed-section-wrapper">
          <h3 class="detail-title">Fully distributed</h3>
          <div class="distributed-detail-block">
            <p class="sub-title">We are a fully distributed organization.</p>
            <p>
              We live and work all over the world. This means that our operation
              carries minimal overhead. In turn, this allows to us to charge
              very affordable rates for our services. When you work with us, you
              won’t be paying for our fancy downtown offices, utility bills,
              internet access, or anything like that. Our offices are our homes,
              coffee shops, coworking spaces, libraries, or anywhere else that
              we can grab an internet connection.
            </p>
          </div>
        </v-container>
      </div>

      <div class="team-map-section">
        <v-container
          class="team-map-section-container"
          data-aos="fade-right"
          id="map"
        >
          <google-map
            :center="center"
            :zoom="initialZoomSize"
            :map-type-id="mapTypeId"
            :options="{
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: showZoomControl,
              fullscreenControl: false,
              styles: mapStyle,
              zoomControlOptions: { position: zoomControlPosotion },
              minZoom: 1,
              maxZoom: 5
            }"
          >
            <gmap-cluster :gridSize="10" :styles="clusterStyles">
              <gmap-marker
                v-for="(person, index) in persons"
                :position="person.position"
                :clickable="true"
                :draggable="false"
                :key="index"
                :icon="mapIcon"
                size="10x15"
                @click="center = person.position"
              ></gmap-marker>
            </gmap-cluster>
          </google-map>
        </v-container>
      </div>

      <make-connection />
      <Footer />
    </div>
  </Layout>
</template>

<script>
import Vue from "vue";
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";
import Person from "../components/Person";
import * as VueGoogleMaps from "vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCOoktmXI-4I8SxdA2zWteVUkd17hWHrXk",
    libraries: "places"
  }
});

export default {
  metaInfo: {
    title: "Team | Quarry Design Group"
  },
  components: {
    "google-map": VueGoogleMaps.Map,
    "google-marker": VueGoogleMaps.Marker,
    "gmap-cluster": GmapCluster,
    Footer,
    MakeConnection,
    Person
  },
  data() {
    return {
      team_hero_image: require("~/assets/images/team-hero.jpg"),
      map: require("~/assets/images/map.png"),
      mapTypeId: "roadmap",
      initialZoomSize: 2.6,
      showZoomControl: true,
      overlayImg: require("~/assets/images/map.png"),
      persons: [
        {
          firstName: "Brendan",
          lastName: "Binger",
          role: "Founder / Design Director / Architect",
          photo: require("~/assets/images/members/brendan-binger.png"),
          isFake: false,
          position: {
            lat: 43.289614,
            lng: -121.648436
          }
        },
        {
          firstName: "Dennish",
          lastName: "Karki",
          role: "Sr Engineer",
          photo: require("~/assets/images/members/dennish-karki.png"),
          isFake: false,
          position: {
            lat: 2.060059,
            lng: -76.121094
          }
        },
        {
          firstName: "Valentin",
          lastName: "Sanguinetti",
          role: "Sr Visual Designer",
          photo: require("~/assets/images/members/valentin-sanguinetti.png"),
          isFake: false,
          position: {
            lat: -33.764978,
            lng: -56.082029
          }
        },
        {
          firstName: null,
          lastName: null,
          role: null,
          photo: null,
          isFake: true,
          position: {
            lat: 40.01049,
            lng: -105.261952
          }
        },
        {
          firstName: null,
          lastName: null,
          role: null,
          photo: null,
          isFake: true,
          position: {
            lat: 29.456029,
            lng: -98.543276
          }
        },
        {
          firstName: "Oleg",
          lastName: "Bochulyak",
          role: "Sr Product Designer",
          photo: require("~/assets/images/members/oleg-bochulyakr.png"),
          isFake: false,
          position: {
            lat: 51.5074,
            lng: 0.1278
          }
        },
        {
          firstName: "Federico",
          lastName: "Bernotti",
          role: "Identity & Brand Systems Designer",
          photo: require("~/assets/images/members/federico-bernotti.png"),
          isFake: false,
          position: {
            lat: 41.865892,
            lng: 13.0
          }
        },
        {
          firstName: "Vinay",
          lastName: "Paudel",
          role: "Engineer",
          photo: require("~/assets/images/members/vinay-paudel.png"),
          isFake: false,
          position: {
            lat: 50.032809,
            lng: 24.953124
          }
        },
        {
          firstName: "Puneet",
          lastName: "Maloo",
          role: "Sr Engineer & Systems Architect",
          photo: require("~/assets/images/members/puneet-maloo.png"),
          isFake: false,
          position: {
            lat: 50.816705,
            lng: 31.105468
          }
        },
        {
          firstName: "Dmitry",
          lastName: "Kutuzov",
          name: "Dmitry Kutuzov",
          role: "PPC Analyst",
          photo: require("~/assets/images/members/dmitry-kutuzov.png"),
          isFake: false,
          position: {
            lat: 48.976983,
            lng: 38.048829
          }
        },
        {
          firstName: "Evgeniy",
          lastName: "Fishbein",
          role: "Data Engineer",
          photo: require("~/assets/images/members/evgeniy-fishbein.png"),
          isFake: false,
          position: {
            lat: 48.976983,
            lng: 38.048829
          }
        },
        {
          firstName: "Kiros",
          lastName: "Matavastros",
          role: "Engineer",
          photo: require("~/assets/images/members/kiros-matavastros.png"),
          isFake: false,
          position: {
            lat: 48.976983,
            lng: 38.048829
          }
        },
        {
          firstName: "Nick",
          lastName: "Burdukin",
          role: "Sr Engineer",
          photo: require("~/assets/images/members/nick-burdukin.png"),
          isFake: false,
          position: {
            lat: 48.976983,
            lng: 38.048829
          }
        },
        {
          firstName: "Serg",
          lastName: "Guba",
          role: "Product Designer",
          photo: require("~/assets/images/members/serg-guba.png"),
          isFake: false,
          position: {
            lat: 57.77189,
            lng: 35.499999
          }
        },
        {
          firstName: "Alexey",
          lastName: "Pronin",
          role: "Engineer",
          photo: require("~/assets/images/members/alexey-pronin.png"),
          isFake: false,
          position: {
            lat: 56.43548,
            lng: 38.433593
          }
        },
        {
          firstName: "Dmitry",
          lastName: "Sheftelev",
          role: "Engineer",
          photo: require("~/assets/images/members/dmitry-sheftelev.png"),
          isFake: false,
          position: {
            lat: 22.548598,
            lng: 86.300778
          }
        },
        {
          firstName: "Naveen",
          lastName: "Kumar Jain",
          role: "Engineer",
          photo: require("~/assets/images/members/naveen-kumar.png"),
          isFake: false,
          position: {
            lat: 27.172086,
            lng: 86.300778
          }
        }
      ],
      mapIcon: require("~/assets/images/pin.svg"),
      clusterStyles: [
        {
          textColor: "black",
          url: require("~/assets/images/cluster-icon.svg"),
          height: 15,
          width: 14.5
        }
      ],
      center: {
        lat: 10.0,
        lng: 10.0
      },
      zoomControlPosotion: 6,
      mapStyle: [
        { elementType: "labels.text.fill", stylers: [{ display: "none" }] },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#000000"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "simplified"
            },
            {
              color: "#000000"
            },
            {
              lightness: 14
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            },
            {
              saturation: "-100"
            },
            {
              lightness: "30"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            },
            {
              gamma: "0.00"
            },
            {
              lightness: "74"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "all",
          stylers: [
            {
              lightness: "3"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    };
  },
  computed: {
    members: function() {
      let members = [];
      for (let index in this.persons) {
        if (!this.persons[index].isFake) members.push(this.persons[index]);
      }
      return members;
    }
  },
  methods: {
    adjustZoomSize() {
      const vm = this;
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth < 600) {
        vm.initialZoomSize = 1;
        vm.showZoomControl = false;
      } else {
        vm.initialZoomSize = 2.6;
        vm.showZoomControl = true;
      }

      window.addEventListener("resize", () => {
        windowWidth = document.documentElement.clientWidth;
        if (windowWidth < 600) {
          vm.initialZoomSize = 1;
          vm.showZoomControl = false;
        } else {
          vm.initialZoomSize = 2.6;
          vm.showZoomControl = true;
        }
      });
    }
  },
  mounted() {
    this.adjustZoomSize();
  }
};
</script>
