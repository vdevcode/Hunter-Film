<template>
  <div>
    <div class="container mx-auto mt-20 flex border-b border-gray-500 pb-10">
      <img src="../../assets/images/joker.jpg" alt="" class="w-64" />
      <div class="ml-24">
        <h2 class="text-4xl font-semibold text-white">Joker</h2>
        <span class="text-gray-500 text-sm flex"
          ><svg
            class="fill-current text-yellow-500 w-4 mr-3"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g></svg
          >82% | 2020-10-01 Crime , Thriller, Drama</span
        >
        <p class="text-white mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloribus dolorem odit vitae laboriosam possimus accusamus, quos,
          dolorum non, quaerat fuga omnis. Quo expedita sunt, unde dolor odit
          eius optio. Quas aut quaerat, expedita accusamus quibusdam porro,
          repellat consequatur optio, voluptatibus omnis eveniet natus autem?
          Numquam asperiores magni consequatur eaque quia quasi sint praesentium
          iure.
        </p>
        <div class="mt-5">
          <span class="text-white mt-5 font-semibold">Feautured Cast</span>
          <div class="flex">
            <div class="flex flex-col mt-5 mr-5">
              <span class="text-white">Scott Silver</span>
              <span class="text-gray-500">Writer</span>
            </div>
            <div class="flex flex-col mt-5">
              <span class="text-white">Bruce Berman</span>
              <span class="text-gray-500">Excutive Produce</span>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <a
            href="#"
            class="bg-yellow-500 rounded px-5 py-3 inline-flex text-black"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            <span class="ml-3">Play Trailer</span>
          </a>
          <a
            href="#"
            class="bg-yellow-500 rounded px-5 py-3 inline-flex text-black ml-3"
          >
            <img src="@/assets/images/heart-white.png" class="" />
            <span class="ml-3">Favourites</span>
          </a>
        </div>
      </div>
    </div>
    <cast-actor />
    <images-actor />
  </div>
</template>

<script>
import CastActor from "@/components/Cast/CastActor.vue";
import ImagesActor from "../../components/ImagesActor/ImagesActor.vue";

export default {
  name: "PageMovie",
  components: {
    CastActor,
    ImagesActor,
  },
};
</script>
