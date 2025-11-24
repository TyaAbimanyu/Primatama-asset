<template>
  <q-page>
    <!-- Hero Banner Section -->
    <div class="hero-banner col-12">
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/refs/heads/main/banner.png"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <h1 class="text-h4 text-md-h3">We Create Impactful Visuals for Your Brand</h1>
          <p class="text-body1">
            From Billboard to Digital Printing — Delivering Quality, Compliance, and
            Visibility Since 1998.
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
    <div class="about-us col-12">
      <!-- row 1 -->
      <div class="row justify-center text-center mb-24">
        <div class="col">
          <div class="text-h6 q-mb-lg">About PT Primatama Tri Jaya</div>
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/about%20us.jpg"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <div style="font-weight: 400">
            Primatama Promotion, established on August 15, 1998, is an experienced
            Indonesian provider of outdoor advertising and signage solutions.
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-left">
          <div style="font-weight: 400">
            With over 25 years of experience, we specialize in billboards, neon boxes,
            signage systems, digital printing, and outdoor advertising tax management.
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/about%20us%202.jpg"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
      </div>
      <div class="row q-col-gutter-md items-center q-mb-md">
        <div class="col-12 col-md-6 text-center">
          <q-img
            src="https://raw.githubusercontent.com/TyaAbimanyu/Primatama-asset/main/Designer.png"
            alt="about us"
            style="width: 100%; max-width: 290px; height: auto; border-radius: 10px"
          />
        </div>
        <div class="col-12 col-md-6 text-left">
          <div class="row q-mb-md" style="font-weight: 400">
            We deliver high-quality visual solutions that meet creative and regulatory
            standards, effectively communicating clients' brands.
          </div>
          <q-btn class="btn btn-about-us">Learn More</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
/* Hero Banner styles */
.hero-banner {
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
.about-us {
  padding: 48px 120px;
  background: radial-gradient(circle, #da1212 0%, #740a0a 100%);
  color: white;
}

.btn-about-us {
  background: radial-gradient(circle, #082bc8 13%, #041562 71%);
  color: white;
}
</style>
