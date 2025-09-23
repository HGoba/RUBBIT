import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    const categoryList = ref([]);
    const getCategory = async () => {
        const res = await axios.get("http://localhost:3000/api/category");
        if (res.data.code === 0) {
            categoryList.value = res.data.data;
            console.log(categoryList.value);
        }
    };

    return {}
})
