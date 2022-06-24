<template>
  <div class="mx-5 my-10">
    <!-- card -->
    <div class="flex">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="block m-3 p-5 w-50 h-30 bg-white border-4 border-red-500 shadow-md hover:bg-red-100"
      >
        <nuxt-link :to="`/admin/offlineClass/category/${index}`">
          <h5 class="mb-2 text-xl px-5 text-center">{{ category.name }}</h5>
          <p class="text-2xl text-center font-bold">
            {{ category.class }} CLASS
          </p>
        </nuxt-link>
      </div>
    </div>
    <!-- search box -->
    <form class="flex items-center">
      <label for="search" class="sr-only">Search</label>
      <div class="relative w-80 m-3">
        <input
          type="text"
          id="search"
          class="bg-gray-50 border border-red-300 text-gray-900 text-sm w-full p-2.5 text-left rounded"
          placeholder="Search By Name or ID"
          required
        />
      </div>
      <button
        type="submit"
        class="items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-400"
      >
        Search
      </button>
    </form>
    <!-- dropdown -->
    <div class="my-5 mx-3">
      <button
        @click="dropcategory = !dropcategory"
        class="flex text-black w-60 bg-white border border-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center space-x-40"
        type="button"
      >
        <p>ALL</p>
        <svg
          v-if="dropcategory"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke-width="2"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        v-show="dropcategory"
        id="dropdown"
        class="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-60"
      >
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li v-for="(category, index) in categories" :key="index">
            <a href="#" class="block px-4 py-2 hover:bg-red-200">{{
              category.name
            }}</a>
          </li>
        </ul>
      </div>

      <button
        @click="dropclass = !dropclass"
        class="flex text-black w-60 bg-white border border-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center space-x-40"
        type="button"
      >
        <p>ALL</p>
        <svg
          v-if="dropclass"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke-width="2"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        v-show="dropclass"
        id="dropclass"
        class="z-10 mx-60 absolute bg-white divide-y divide-gray-100 rounded shadow w-60"
      >
        <ul class="py-1 text-sm text-gray-700">
          <li v-for="(kelas, index) in classes" :key="index">
            <a href="#" class="block px-4 py-2 hover:bg-red-200">{{
              kelas.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- table -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="table-auto w-full text-center">
        <thead class="bg-red-600">
          <tr class="text-white">
            <th class="px-3 py-4">ID</th>
            <th class="px-3 py-4">Name</th>
            <th class="px-3 py-4">Contact</th>
            <th class="px-3 py-4">Category</th>
            <th class="px-3 py-4">Class</th>
            <th class="px-3 py-4">Date</th>
            <th class="px-3 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(list, index) in lists"
            :key="index"
            class="border-separate border-black sm:rounded-lg"
          >
            <td>{{ list.id }}</td>
            <td>{{ list.name }}</td>
            <td>{{ list.contact }}</td>
            <td>{{ list.category }}</td>
            <td>{{ list.class }}</td>
            <td>{{ list.date }}</td>
            <td>
              <div class="flex justify-around">
                <button>
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button>
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropclass: false,
      dropcategory: false,
      categories: [
        { name: "Cardio", class: "3" },
        { name: "Strength", class: "3" },
        { name: "Dance", class: "3" },
      ],
      classes: [{ name: "Bodycombat" }, { name: "Step up" }],
      lists: [
        {
          id: "0001",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
        {
          id: "0002",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
        {
          id: "0003",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
      ],
    };
  },
};
</script>
