import cache from '../library/redis';

export function saveCache(key: string, data: any) {
    console.log(key, data)
    cache.set(key, data, 24 * 60)
}

export async function getCache(key: string) {
    return await cache.get(key)
}