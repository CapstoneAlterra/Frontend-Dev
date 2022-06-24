<template>
  <div class="mx-5 my-10">
    <!-- button -->
    <nuxt-link to="../">
      <button class="border-2 border-solid rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </nuxt-link>
    <!-- card -->
    <div class="flex">
      <div
        class="block m-3 p-5 w-55 h-28 border-4 border-red-500 shadow-md bg-red-100"
      >
        <h5 class="mb-2 text-xl px-5 text-center">Cardio</h5>
        <p class="text-2xl text-center font-bold">3</p>
      </div>
    </div>
    <!-- divider -->
    <div class="flex justify-between">
      <h1 class="text-5xl font-medium">Classes</h1>
      <nuxt-link to="/admin/offlineClass/addClass">
        <button
          class="inline-flex bg-red-600 text-white rounded-md gap-1 h-14 w-36 items-center px-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span class="font-size">Add New Class</span>
        </button>
      </nuxt-link>
    </div>
    <!-- Classes -->
    <div class="grid my-5 grid-cols-3 text-center gap-2">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="border-1 border border-red-300"
      >
        <h1 class="text-2xl font-medium">
          {{ category.name }}
        </h1>
        <!-- card -->
        <div>
          <div
            v-for="(kelas, index) in category.classes"
            :key="index"
            class="m-3 p-5 bg-white border-4 border-red-500 shadow-md hover:bg-red-100 text-center text-xl"
          >
            <h1 class="font-medium">{{ category.name }}</h1>
            <p>{{ kelas.trainer }}</p>
            <p>{{ kelas.date }}</p>
            <p>{{ kelas.time }}</p>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                /></svg
              >{{ kelas.peserta }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Body Combat",
          classes: [
            {
              trainer: "Trainer Iwan",
              date: "17 June 2022",
              time: "20-00 - 21.00",
              peserta: "30",
            },
            {
              trainer: "Trainer Tulus",
              date: "17 June 2022",
              time: "21-00 - 22.00",
              peserta: "30",
            },
          ],
        },
        {
          name: "Step Up",
          classes: [
            {
              trainer: "Trainer Adi",
              date: "17 June 2022",
              time: "20-00 - 21.00",
              peserta: "30",
            },
            {
              trainer: "Trainer Wawan",
              date: "17 June 2022",
              time: "21-00 - 22.00",
              peserta: "30",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
