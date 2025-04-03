// ... existing middleware ...
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// 添加安全中间件
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100 // 每个IP限制100次请求
}));