const api= import.meta.env.VITE_API_URL; 

export const getAllProducts = async (): Promise<any> => {
    try {
        const url = `${api}/products`;
        const res = await fetch(url);
        const data = await res.json()
        return data;
    } catch(e){
        console.debug(e)
        return null;
    }
    
}

export const getAllSpecialPrices = async ()=> {
    try {
        const url = `${api}/specialPrices`

        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch(e){
        console.debug(e)
    }
}

export const userRegisteredSpecialPrices = async (id: string)=> {
    try {
        const url = `${api}/specialPrices/user/${id}`

        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch(e){
        console.debug(e)
    }
}

export const createSpecialPrice = async (formData:any)=> {
    try {
        const url = `${api}/specialPrices
        `

        const res = await fetch(url, {method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        let data = await res.json();
        data.resStatus = res.status;
        return data
    } catch(e){
        console.debug(e)
    }
}


