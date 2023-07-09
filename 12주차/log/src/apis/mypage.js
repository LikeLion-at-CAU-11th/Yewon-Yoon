import { getAuthAxios } from "./authAxios";
export const getMyPage= async(tokens)=>{
    const authAxios=getAuthAxios(tokens);
    const result = await authAxios.get('/mypage');
    return result;
};