<template>
    <div>
        <!-- tombol kiri -->
        <div>
            <a href="/admin/onlineClass/manageclass" class="ml-5">
                <button type="button" class="text-blue-700 mt-10 border border-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-5 px-6 text-center inline-flex items-center">
                    <img src="@/static/kiri.svg" alt="">
                </button>
            </a>
        </div>
        <!-- judul -->
        <div>
            <p class="text-4xl font-bold ml-5 mt-5">BodyCombat</p>
            <p class="text-2xl mt-5 ml-5">16 June 2022 &nbsp; 21.00 - 22.00</p>
        </div>
        <div>
            <div class="mt-10 ml-5">
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <div>
                            <input type="search" id="default-search" class="block p-4 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
                            <button type="submit" class="text-white ml-3 absolute left-96 bottom-2.5 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 ml-5 mr-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-l text-white uppercase bg-red-600 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Contact
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Class
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-600">
                        <td class="px-6 py-4 font-bold text-black">
                            001
                        </td>
                        <td class="px-6 py-4 font-bold text-black">
                            Gavriel Ijlal
                        </td>
                        <td class="px-6 py-4">
                            081217245488
                        </td>
                        <td class="px-6 py-4">
                            Body Building
                        </td>
                        <td class="px-6 py-4">
                            Body Combat
                        </td>
                        <td class="px-6 py-4">
                            13/06/2022
                        </td>
                        <td class=" py-4 text-right flex">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">
                                <img src="@/static/edit.svg" alt="">
                            </a>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">
                                <img src="@/static/delete.svg" alt="">
                            </a>
                        </td>
                    </tr>
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-600">
                        <td class="px-6 py-4 font-bold text-black">
                            002
                        </td>
                        <td class="px-6 py-4 font-bold text-black">
                            Gavriel Ijlal
                        </td>
                        <td class="px-6 py-4">
                            081217245488
                        </td>
                        <td class="px-6 py-4">
                            Body Building
                        </td>
                        <td class="px-6 py-4">
                            Body Combat
                        </td>
                        <td class="px-6 py-4">
                            13/06/2022
                        </td>
                        <td class=" py-4 text-right flex">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">
                                <img src="@/static/edit.svg" alt="">
                            </a>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3">
                                <img src="@/static/delete.svg" alt="">
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>