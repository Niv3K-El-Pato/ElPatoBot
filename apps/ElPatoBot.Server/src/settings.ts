export const env = process.env['env'] as 'dev' | 'prd';

interface Settings {
    port: number,
    corsDomain: string,
    delayBetweenUserQuacksInSeconds: number,
}

const allSettings:Record<'dev' | 'prd', Settings> = {
    dev: {
        port: 8084,
        corsDomain: '*',
        delayBetweenUserQuacksInSeconds: 2, 
    },
    prd: {
        port: 8080,
        corsDomain: 'https://elpatobot.com',
        delayBetweenUserQuacksInSeconds: 5 
    }
};

export const settings = allSettings[env];