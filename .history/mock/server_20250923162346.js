// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // 允许跨域
app.use(express.json()); // 解析 json 请求

// ---------------------
// 模拟分类接口
// ---------------------
app.get('/api/category', (req, res) => {
    res.json({
        code: 0,
        message: 'success',
        data: [
            { id: 1, name: '居家' },
            { id: 2, name: '美食' },
            { id: 3, name: '服饰' },
        ],
    });
});

// ---------------------
// 模拟购物车接口
// ---------------------
app.get('/api/cart', (req, res) => {
    res.json({
        code: 0,
        message: 'success',
        data: {
            total: 2,
            items: [
                { id: 101, name: '苹果', count: 1 },
                { id: 102, name: '面包', count: 1 },
            ],
        },
    });
});

// ---------------------
// 模拟首页数据接口（可选）
// ---------------------
app.get('/api/home', (req, res) => {
    res.json({
        code: 0,
        message: 'success',
        data: {
            banner: [
                { id: 1, img: '/images/banner1.jpg', link: '/' },
                { id: 2, img: '/images/banner2.jpg', link: '/' },
            ],
            products: [
                { id: 201, name: '红苹果', price: 3.5 },
                { id: 202, name: '香蕉', price: 2.8 },
            ],
        },
    });
});

// ---------------------
// 启动服务器
// ---------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Mock server running at http://localhost:${PORT}`);
});
