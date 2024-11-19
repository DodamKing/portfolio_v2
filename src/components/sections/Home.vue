<!-- components/sections/Home.vue -->

<template>
    <div class="w-full">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
    </div>
</template>

<script setup>
import Hero from './Hero.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
</script>