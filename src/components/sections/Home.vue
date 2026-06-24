<!-- components/sections/Home.vue -->

<template>
    <div class="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
    </div>
</template>

<script setup>
import Hero from './Hero.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Footer from '../common/Footer.vue'
</script>
