<template>
    <div>
        <!-- tombol kiri -->
        <div>
            <a href="/admin/onlineClass" class="ml-5">
                <button type="button" class="text-blue-700 mt-10 border border-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-5 px-6 text-center inline-flex items-center">
                    <img src="@/static/kiri.svg" alt="">
                </button>
            </a>
        </div>
        <!-- judul -->
        <div>
            <p class="text-4xl font-bold ml-5 mt-5">Add New Class</p>
        </div>
        <!-- filter -->
        <form action="">
            <div class="mt-10 ml-5">
                <div class="grid grid-col-4 grid-flow-col gap-4 mb-10">
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex justify-between">
                        <button class="mr-2">Cardio</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex">
                        <button class="mr-2">BodyCombat</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex">
                        <button class="mr-2">Trainer Tulus</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                </div>
                <div class="grid grid-col-4 grid-flow-col gap-4">
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex">
                        <button class="mr-2">Date -</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex">
                        <button class="mr-2">Time -</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                    <div class="border-2 mr-5 py-3 px-20 rounded-lg flex">
                        <button class="mr-2">Link Zoom Cardio</button>
                        <img src="@/static/kanan.svg" alt="">
                    </div>
                </div>
                <div class="grid grid-col-4 grid-flow-col gap-4">
                    <div class="mt-10 ml-5">
                        <p class="font-bold text-xl">Price</p>
                        <p class="bg-red-500 text-white mt-3 text-center rounded w-max h-max p-3">Rp. 45.000</p>
                    </div>

                    <div class="flex mt-8">
                        <div class="rounded-lg shadow-xl bg-gray-50">
                            <div class="m-4">
                                <label class="inline-block mb-2 text-gray-500">Add Image Class</label>
                                <div class="">
                                    <label
                                        class="flex h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <input type="file" class="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <!-- price -->
            <!-- input description -->
            <div class="mt-10 ml-5 mr-10">
                <div class="mb-6">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <input type="text" id="large-input" class="block w-full h-20 p-10 text-gray-900 border-2 border-red-600 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <!-- button save -->
            <div>
                <button class="bg-red-600 ml-5 hover:bg-red-800 text-white font-bold py-2 px-4 absolute-right-200">
                    Button
                </button>
            </div>

        </form>
    </div>
</template>