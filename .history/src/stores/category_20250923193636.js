import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([]);
    // action 获取导航列表数据的方法
    const getCategory = async () => {
        const res = await axios.get("http://localhost:3000/api/category");
        if (res.data.code === 0) {
            categoryList.value = res.data.data;
            console.log(categoryList.value);
        }
    };

    return { categoryList, getCategory }
})
