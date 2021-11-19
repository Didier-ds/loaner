import store from '@/store'
import router from '@/router'

  
export default async function refresh(){
        await store.dispatch('auth/refresh', JSON.parse(sessionStorage.getItem('token')))
        .then((res) => {
        console.log(res)
        router.push({'path': '/'})
        }).catch((err) => {
            console.log(err)
            router.push({'path': '/login'})
        })
    }
 