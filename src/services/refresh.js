import store from '@/store'
import router from '@/router'

  
export default async function refresh(){
        await store.dispatch('auth/refresh')
        .then(() => {
        // console.log(res)
        // router.push({'path': '/'})
        }).catch(() => {
            // console.log(err)
            router.push({'path': '/login'})
        })
    }
 