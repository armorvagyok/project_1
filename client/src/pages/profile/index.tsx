"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost/project_1/server/public/api/user");
            setData(result.data);
        };
        fetchData();
    }, []);

    return(
        <></>
    )
}