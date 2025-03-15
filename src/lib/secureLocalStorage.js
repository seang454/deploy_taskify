//set accessToken
export const setAccessToken = (accessToken)=>{
    localStorage.setItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY, accessToken);
}

export const getAceAccessToken = ()=>{
    const accessToken = localStorage.getItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY);
    return accessToken;
}

export const removeAccessToken = ()=>{
    localStorage.removeItem(import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY);
}


