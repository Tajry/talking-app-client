export const fetcher = async (url:string)=>{
    const res = await fetch(url ,{
        headers:{
            
        }
    });
    

    if (!res.ok) {
        const msg = "error "
        const info = await res.json();
        const status = res.status;
        const error = new Error(msg)
        console.error(info ,status)
        throw error;
    }

    return res.json();
}