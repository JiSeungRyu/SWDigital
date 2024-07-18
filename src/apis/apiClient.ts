// apiClient.js (예시 파일명)

import axios from "axios";

const apiClient = axios.create({
    baseURL: "/api", // 프록시 경로로 baseURL 설정
    // 기타 axios 설정
});

export default apiClient;
