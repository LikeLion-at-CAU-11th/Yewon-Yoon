import axios from "axios";
import { getNewRefreshToken } from "./refresh";
export const getAuthAxios=(tokens)=>{
    const {access, refresh} = tokens;
    const authAxios=axios.create({
        baseURL: 'http://front.cau-likelion.org/',
        headers:{
            Authorization: access,
        },
    });
    authAxios.interceptors.response.use(
        (res)=>res,
        async (error)=>{
            if(error.response.status === 401){
                try{
                    const {accessToken, refreshToken} = await getNewRefreshToken(access, refresh);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    const config = error.response.config;
                    config.header.Authorization = accessToken;
                    return await axios.get(config.url, config);
                }catch(err){
                    //토큰 정보를 모두 삭제하면 로그아웃 됨
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');

                }
                
            }
        }
        );
    return authAxios;
};