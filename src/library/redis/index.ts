import Redis from 'ioredis';


class Cache {
    private readonly connection: any;
    constructor() {
        this.connection = new Redis({
            host: process.env.REDIS_HOST || "localhost",
            port: Number(process.env.REDIS_PORT) || 6379,
            keyPrefix: "cache:"
        })
    }

    public async get(key: string) {
        const value = await this.connection.get(key);

        return value ? JSON.parse(value) : null;
    }

    public set(key: string, value: any, timeExp: number): void {
        this.connection.set(key, JSON.stringify(value), 'EX', timeExp);
    }

    public del(key: string): void {
        this.connection.del(key);
    }

    public async delPrefix(prefix: string): Promise<void> { 
        const keys = await this.connection.keys(`cache:${prefix}:*`).map((value:any) => value.replace("cache:", ""));
        this.connection.del(keys)
    }  
}

const cache = new Cache();

export default cache;
