import React, { useEffect, useState } from 'react';
import { getMyPage } from '../apis/mypage';

const Mypage = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        getMyPage({access: accessToken, refresh: refreshToken}).then((res)=>{
            setData(res.data);
            setLoading(false);
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