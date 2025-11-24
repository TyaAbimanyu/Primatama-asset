<template>
  <q-page>
    <!-- Hero Banner Section -->
    <div class="background-blue col-12">
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            :src="heroImage"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <h1 class="text-h4 text-md-h3">{{ heroTitle }}</h1>
          <p class="text-body1">
            {{ heroSubtitle }}
          </p>
          <div class="row q-gutter-sm q-mt-md">
            <div class="col-auto">
              <q-btn
                class="btn btn-primary q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable"
              >
                Explore Our Services
              </q-btn>
            </div>
            <div class="col-auto">
              <q-btn
                class="btn btn-secondary q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable"
              >
                Contact Us
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <div class="background-red col-12">
      <div class="row justify-center text-center mb-24">
        <div class="col">
          <div class="text-h6 q-mb-lg">About PT Primatama Tri Jaya</div>
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            :src="aboutUsImage1"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <div style="font-weight: 400">
            {{ aboutUs1 }}
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-left">
          <div style="font-weight: 400">
            {{ aboutUs2 }}
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-img
            :src="aboutUsImage2"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            :src="aboutUsImage3"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <div class="row q-mb-md" style="font-weight: 400">
            {{ aboutUs3 }}
          </div>
          <q-btn class="btn btn-about-us">Learn More</q-btn>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="background-blue col-12">
      <div class="row justify-center text-center mb-24">
        <div class="col">
          <div class="text-h6 q-mb-lg">Why Choose Us</div>
        </div>
      </div>
      <div class="row q-col-gutter-md">
        <div
          v-for="(item, index) in chooseUs"
          :key="index"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card class="q-pa-md" style="border-radius: 10px">
            <q-card-section>
              <Icon :icon="item.icon" width="48" height="48" style="color: #041562" />
              <div class="text-h6 q-mt-md" style="color: #041562">{{ item.title }}</div>
              <p class="text-body2 q-mt-sm" style="color: #041562">
                {{ item.description }}
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="background-red col-12">
      <div class="row justify-center text-center mb-24">
        <div class="col">
          <div class="text-h6 q-mb-lg">Our Services</div>
        </div>
      </div>
      <div class="row q-col-gutter-md"></div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const heroTitle = ref("");
const heroSubtitle = ref("");
const heroImage = ref("");

const aboutUs1 = ref("");
const aboutUs2 = ref("");
const aboutUs3 = ref("");
const aboutUsImage1 = ref("");
const aboutUsImage2 = ref("");
const aboutUsImage3 = ref("");
const chooseUs = ref([]);

function getData() {
  heroTitle.value = "We Create Impactful Visuals for Your Brand";
  heroSubtitle.value =
    "From Billboard to Digital Printing — Delivering Quality, Compliance, and Visibility Since 1998.";
  heroImage.value =
    "https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/refs/heads/main/banner.png";
  aboutUs1.value =
    "Primatama Promotion, established on August 15, 1998, is an experienced Indonesian provider of outdoor advertising and signage solutions.";
  aboutUs2.value =
    "With over 25 years of experience, we specialize in billboards, neon boxes,signage systems, digital printing, and outdoor advertising tax management.";
  aboutUs3.value =
    "We deliver high-quality visual solutions that meet creative and regulatory standards, effectively communicating clients' brands.";
  aboutUsImage1.value =
    "https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/about%20us.jpg";
  aboutUsImage2.value =
    "https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/about%20us%202.jpg";
  aboutUsImage3.value =
    "https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/Designer.png";

  chooseUs.value = [
    {
      icon: "mdi:check-circle",
      title: "High-Quality Standards",
      description: "Proven track record across various business sectors and brands.",
    },
    {
      icon: "mdi:hourglass",
      title: "Regulatory Compliance",
      description: "Over 25 years in signage and outdoor media industry.",
    },
    {
      icon: "mdi:cash-register",
      title: "Maximized Visibility",
      description: "Comprehensive assistance in advertising tax and permit management.",
    },
    {
      icon: "mdi:puzzle",
      title: "Maximized Visibility",
      description: "From design, production, to installation and legal permit handling.",
    },
  ];
}
getData();
</script>

<style scoped>
/* Hero Banner styles */
.background-blue {
  padding: 48px 120px;
  background: radial-gradient(circle, #041562 0%, #082bc8 100%);
  color: white;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 12px;
}

.btn-primary {
  background-color: #ff0000;
  color: white;
}

.btn-secondary {
  background-color: white;
  color: #041562;
  border: 2px solid #041562;
}

/* About Us styles */
.background-red {
  padding: 48px 120px;
  background: radial-gradient(circle, #da1212 0%, #740a0a 100%);
  color: white;
}

.btn-about-us {
  background: radial-gradient(circle, #082bc8 13%, #041562 71%);
  color: white;
}

/* Why Choose Us styles */
.q-card {
  transition: transform 0.3s;
}

.q-card:hover {
  transform: translateY(-5px);
}
</style>
