<template>
    <div>
        <!-- back -->
        <div>
            <a href="/admin/onlineClass" class="ml-5">
                <button type="button" class="text-blue-700 mt-10 border border-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-5 px-6 text-center inline-flex items-center">
                    <img src="@/static/kiri.svg" alt="">
                </button>
            </a>
        </div>
        <!-- card -->
        <div class="flex mt-10">
            <div class="block m-5 p-6 max-w-sm bg-white rounded-lg border-4 border-red-600 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl px-5 tracking-tight text-gray-900 dark:text-white text-center">Cardio</h5>
                <p class="text-5xl text-center font-bold dark:text-white">5</p>
            </div>   
        </div>
        <div class="flex justify-between border">
            <p class="text-5xl font-bold ml-5 mt-10 align-middle">Classes</p>
            <a href="/admin/onlineClass/addClass">
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-0.5 mr-10 mb-2">Add New Class</button>
            </a>

        </div>
        <div class="mt-10 flex font-bold text-xl">
            <p class="mr-60 ml-10">BodyCombat</p>
            <p class="mr-60 ml-10">BodyCombat</p>
            <p class="mr-60 ml-10">BodyCombat</p>
        </div>
        <div class="flex ml-5">
            <a href="/admin/onlineClass/clickClass" class="block p-6 max-w-sm bg-white mt-10 mr-48 border-4 border-red-600 shadow-md hover:bg-gray-100">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">BodyCombat</h5>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">Trainer Iwan</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">17 June 2022</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">21.00-22.00</p>
                <div class="flex">
                    <img src="@/static/peserta.svg" alt="">
                    <p>30</p>
                </div>
            </a>
            <a href="#" class="block p-6 max-w-sm bg-white mt-10 mr-48 border-4 border-red-600 shadow-md hover:bg-gray-100">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">BodyCombat</h5>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">Trainer Iwan</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">17 June 2022</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">21.00-22.00</p>
                <div class="object-center flex">
                    <img src="@/static/peserta.svg" alt="">
                    <p>30</p>
                </div>
            </a>
            <a href="#" class="block p-6 max-w-sm bg-white mt-10 mr-48 border-4 border-red-600 shadow-md hover:bg-gray-100">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">BodyCombat</h5>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">Trainer Iwan</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">17 June 2022</p>
                <p class="font-normal text-gray-700 text-center dark:text-gray-400">21.00-22.00</p>
                <div class="object-center flex">
                    <img src="@/static/peserta.svg" alt="">
                    <p>30</p>
                </div>
            </a>
        </div>


    </div>
</template>

<script>
export default {
      layout: 'admin',
}
</script>