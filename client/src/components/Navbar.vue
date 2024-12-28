<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="primary">
    <BNavbarBrand to="/">Monki</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem to="/">Home</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
