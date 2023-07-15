<template>
  <div class="flex">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="" />
    </router-link>
    <ul class="flex items-center text-white">
      <!-- Movies -->
      <li>
        <router-link to="/movies" class="ml-5">Movies</router-link>
      </li>
      <!-- Actors -->
      <li>
        <router-link to="/actors" class="ml-5">Actors</router-link>
      </li>
      <!-- Profile -->
      <li>
        <router-link to="/profile" class="ml-5">Profile</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
