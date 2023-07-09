import axios from "axios";
export const getNewRefreshToken = async(access, refresh)=>{
    const result = await axios.post('http://front.cau-likelion.org/refresh',
    {
        refreshToken: refresh,
    },
    {
        headers:{
            Authorization: access,
        },
    }
    );
    return result.data;
};