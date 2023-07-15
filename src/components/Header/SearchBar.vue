<template>
  <div class="flex relative">
    <input
      type="text"
      class="rounded-[6px] bg-gray-600 px-9 w-60 mr-3 bg-transparent outline-none text-white border border-blue-500"
      placeholder="Search..."
    />
    <div class="absolute top-0 pr-3">
      <svg class="fill-current w-4 text-gray-300 mt-3 ml-2" viewBox="0 0 24 24">
        <path
          class="heroicon-ui"
          d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
        />
      </svg>
    </div>
    <div v-if="false" class="absolute mt-12 w-60 rounded bg-gray-600 z-10">
      <ul>
        <li class="flex items-center border-b border-gray-600 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10" />
          <span class="ml-3">Die Hard</span>
        </li>
        <li class="flex items-center border-b border-gray-600 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10" />
          <span class="ml-3">Die Hard</span>
        </li>
        <li class="flex items-center border-b border-gray-600 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10" />
          <span class="ml-3">Die Hard</span>
        </li>
        <li class="flex items-center border-b border-gray-600 p-1">
          <img src="@/assets/images/joker.jpg" alt="" class="w-10" />
          <span class="ml-3">Die Hard</span>
        </li>
      </ul>
    </div>
    <img
      src="@/assets/images/avatar.jpg"
      alt=""
      class="h-10 rounded-full ml-10"
    />
  </div>
</template>

<script>
export default {};
</script>
