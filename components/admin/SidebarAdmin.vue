<template>
  <div class="w-64 ml-4 mr-2 mt-4" aria-label="Sidebar">
   <div class="py-4 px-3 bg-white border-r-2 border-gray-200">
      <nuxt-link to="/" class="flex items-center mb-10">
         <img src="@/static/Logo.png" alt="">
      </nuxt-link>
      <ul class="space-y-2">
         <li>
            <nuxt-link to="/admin/dashboard" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
               <svg class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/user" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Manage User</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/membership" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Membership</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/offlineClass" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Manage offline Class</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/onlineClass" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Manage online Class</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/content" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Add Content</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/admin/setting" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Setting</span>
            </nuxt-link>
         </li>
         <li>
            <nuxt-link to="/pagesindex.vue" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </nuxt-link>
         </li>
      </ul>
   </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
</style>