<template>
    <div v-click-away="close" class="border h-32 bg-white my-2 w-full absolute divide-y overflow-y-scroll rounded p-2">
         <p @click="selectPackage(list)" v-for="(list, index) in packages" class="p-2 hover:bg-gray-600 rounded select-none hover:cursor-default hover:text-white font-medium" :key="index">{{list.name}}</p> 
      </div>
</template>
<script>
// import {ref} from 'vue'
export default {
    props: {
        packages: {
            type: Array,
            Default: []
        }
    },
    setup(props, context) {
        const close = () => {
            context.emit('closeForm', false)
        }
        const selectPackage = (data) => {
            context.emit('selectPackage', data)
        }
        return  {
            close,
            selectPackage
        }
    }
    
}
</script>
