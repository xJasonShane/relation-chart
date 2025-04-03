// ... existing schema definition ...
const relationSchema = new mongoose.Schema({
  // ... existing fields ...
});

// 添加数据库索引
relationSchema.index({ source: 1, target: 1 });  // 常用查询字段
relationSchema.index({ updatedAt: -1 });        // 时间排序优化