<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header Section -->
    <q-header elevated>
      <q-toolbar class="nav">
        <!-- Logo -->
        <q-btn flat round class="logo" :to="{ name: 'Home' }" />

        <!-- Title -->
        <q-toolbar-title class="text-white">Primatama</q-toolbar-title>

        <!-- Desktop Navigation -->
        <div class="q-gutter-sm hidden-xs">
          <q-btn flat label="About Us" @click="movePage('about')" class="text-white" />
          <q-btn
            flat
            label="Why Choose Us"
            @click="movePage('why-choose')"
            class="text-white"
          />
          <q-btn
            flat
            label="Our Services"
            @click="movePage('services')"
            class="text-white"
          />
          <q-btn flat label="Gallery" @click="movePage('gallery')" class="text-white" />
          <q-btn
            flat
            label="Contact Us"
            @click="movePage('contact')"
            class="text-white"
          />
        </div>

        <!-- Mobile Navigation Button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="hidden-md-and-up text-white"
          @click="toggleDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Navigation Drawer -->
    <q-drawer v-model="drawerOpen" side="right" bordered>
      <q-list>
        <q-item clickable v-ripple @click="movePage('about')">
          <q-item-section>About Us</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="movePage('why-choose')">
          <q-item-section>Why Choose Us</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="movePage('services')">
          <q-item-section>Our Services</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="movePage('gallery')">
          <q-item-section>Gallery</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="movePage('contact')">
          <q-item-section>Contact Us</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-content q-pa-xl">
        <div class="row q-col-gutter-xxl">
          <!-- Logo & Tagline Column -->
          <div class="col-12 col-md-4">
            <div class="footer-logo">
              <q-img
                src="https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/75488ff23f15aee4f39a59c35b552c77c72ea2c0/logo%20primatama.png"
                width="100px"
              />
            </div>
            <p class="tagline q-mt-md text-white">Your Vision, Our Display</p>
          </div>

          <!-- Email & Contact Column -->
          <div class="col-12 col-md-4">
            <div class="contact-item q-mb-md">
              <q-icon name="email" color="red" size="sm" class="q-mr-sm" />
              <div>
                <div class="contact-label text-white text-bold">Email</div>
                <div class="contact-value text-white">info@primatamapromotion.co.id</div>
              </div>
            </div>
            <div class="contact-item">
              <q-icon name="phone" color="red" size="sm" class="q-mr-sm" />
              <div>
                <div class="contact-label text-white text-bold">Contact Person</div>
                <div class="contact-value text-white">0821 2414 2224</div>
                <div class="contact-value text-white">0859 5990 9777</div>
              </div>
            </div>
          </div>

          <!-- Address Column -->
          <div class="col-12 col-md-4">
            <div class="contact-item">
              <q-icon name="place" color="red" size="sm" class="q-mr-sm" />
              <div>
                <div class="contact-label text-white text-bold">Address</div>
                <div class="contact-value text-white">
                  Jl. Mualim Ahmad No.69, Sangiang Jaya, Kec. Periuk, Kota Tangerang,
                  Banten 15132, Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const drawerOpen = ref(false);

function movePage(sectionId) {
  drawerOpen.value = false; // Close drawer on mobile
  if (sectionId === "about") {
    router.push({ name: "AboutUs" });
  } else if (sectionId === "why-choose") {
    router.push({ name: "WhyChooseUs" });
  } else if (sectionId === "services") {
    router.push({ name: "OurServices" });
  } else if (sectionId === "gallery") {
    router.push({ name: "Gallery" });
  } else if (sectionId === "contact") {
    router.push({ name: "ContactUs" });
  }
}

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
</script>

<style scoped>
/* Header styles */
.logo {
  width: 50px;
  height: 50px;
  background: url("https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/75488ff23f15aee4f39a59c35b552c77c72ea2c0/logo%20primatama.png")
    no-repeat center center;
  background-size: contain;
}

.nav {
  display: flex;
  background: radial-gradient(circle, #082bc8 13%, #041562 71%);
}

.hidden-xs {
  display: none;
}

.hidden-md-and-up {
  display: flex;
}

@media (min-width: 600px) {
  .hidden-xs {
    display: flex;
  }
  .hidden-md-and-up {
    display: none;
  }
}

/* Footer Section */
.footer-section {
  background-color: #2c3e7a;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.contact-label {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.contact-value {
  font-size: 0.95rem;
  line-height: 1.6;
}

.tagline {
  font-size: 1.1rem;
  font-weight: 500;
}

.footer-copyright {
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
