<template>
  
<div class="flex">
  <sidebar-admin/>
    <div class="w-full">
    <Nuxt />
  </div>
</div>
</template>

<script>
import SidebarAdmin from "~/components/admin/SidebarAdmin.vue"

export default {
  components: { SidebarAdmin },
  
}
</script>