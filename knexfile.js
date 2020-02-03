if (process.env.NODE_ENV == 'production') {
    module.exports = {
      
            client: 'mysql',
           connection: {
                host: '77.72.4.12',
                user: 'monrodig_wp1',
                password: 'XYbM9TlM16sb',
                database: 'monrodig_DWDb',
                timezone: 'UTC'
            },
            debug: false,
            pool: {
                // by removing the max connections and setting to min 0 the idletimeout is honoured
                min: 0,
                idleTimeoutMillis: 10000
            }
        
    }     
} else {
    module.exports = {
      
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'zend1310',
                database: 'dw_max',
                timezone: 'UTC'
            },
            debug: true,
            pool: {
                min: 0,
                idleTimeoutMillis: 10000
            }
        }
}