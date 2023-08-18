import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useNavigate();
    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        getMyPage({access: accessToken, refresh: refreshToken})
            .then((res)=>{
                setData(res.data);
                setLoading(false);
            })
            .catch((error)=>{
                if (error.response.status === 401){
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    router("/");
                }
            });
    },[]);
    if (loading) return <div>로딩중..</div>    
    return(
    <div>
        <div>{data.name}</div>
        <div>{data.age}</div>
    </div>
  );
};

export default Mypage;