// 新增 Redis 缓存层
const redis = require('redis');
const { promisify } = require('util');

class CacheManager {
  constructor() {
    this.client = redis.createClient({ 
      host: process.env.REDIS_HOST || 'localhost',
      port: 6379
    });
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
  }

  async cacheResponse(key, data, ttl = 3600) {
    await this.setAsync(key, JSON.stringify(data), 'EX', ttl);
  }

  async getCached(key) {
    const data = await this.getAsync(key);
    return data ? JSON.parse(data) : null;
  }
}

module.exports = new CacheManager();