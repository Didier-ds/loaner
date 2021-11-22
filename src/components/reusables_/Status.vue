<script>
import {computed} from 'vue'

export default {
    name: 'Status',
    props: {
        type: {
            type: String,
            Default: 'pending'
        }
    },
    setup(props){
        return {
            status: computed(() => {
                let classes;
                switch (props.type){
                    case 'open': 
                        classes = 'bg-yellow-200';
                    break;
                    case 'closed': 
                        classes = 'bg-green-200';
                    break;
                    default: 
                    classes = ''
                }
                return classes
            })
        }
    }
}
</script>

<template>
  <span :class="status" class="px-2 p-.5 absolute top-0 left:0 sm:right-0 m-1 rounded-md text-xs ">{{ type }}</span>
</template>
