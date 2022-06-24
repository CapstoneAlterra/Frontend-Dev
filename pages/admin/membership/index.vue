<template>
<!-- user register -->
    <div class="row mx-3 p-3 ">
        <div class="basis-1/3 text-center mt-5 w-40 h-50 mx-0 block bg-white border-4 border-red-500 shadow-xl">
            <p class="mb-3 text-lg tracking-tight text-black dark:text-white">Register User</p>
            <p class="text-xl font-normal font-bold text-black dark:text-gray-400">1</p>
        </div>
<!-- form search -->
    <form class="flex items-center">   
    <div class="relative w-2000">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-white-300 text-black-900 text-sm block w-1000 mt-5 pl-10 p-2.5 bg-white-700 border-gray-600 dark:placeholder-gray-400 text-black" placeholder="Search by Name Or ID" required>
        <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 mt-5 px-3 ml-2 text-sm font-medium text-white bg-red-500 border-red-500 focus:ring-4 focus:outline-none  dark:bg-red-600 ">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>Search</button>
</form>
<!-- Table membership -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg y-1 mt-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white bg-red-600">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Jumlah Kelas yang diambil
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    1
                </th>
                <td class="px-6 py-4">
                    Gifar
                </td>
                <td class="px-6 py-4">
                    08080808
                </td>
                <td class="px-6 py-4">
                    gifar@gmail.com
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
