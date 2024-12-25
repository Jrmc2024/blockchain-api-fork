require('dotenv').config()

const { fastify } = require('fastify')
const { ethers } = require('ethers')

const PORT = process.env.API_PORT
const LOCAL_RPC = process.env.LOCAL_RPC

const provider = new ethers.JsonRpcProvider(LOCAL_RPC)

console.log("LOCAL_RPC => ", LOCAL_RPC);

const app = fastify({
    logger: true,
})

app.post('/impersonateAccount', async function (req, reply) {
    try {
        const { account } = req.body
        await provider.send('hardhat_impersonateAccount', [account])
        reply.statusCode = 201;
        reply.send({
            status: true,
        })
    } catch (error) {
        reply.send({
            status: false,
            error
        })
    }
})

app.post('/setBalance', async function (req, reply) {
    try {
        const { account, amount } = req.body

        await provider.provider.send("hardhat_setBalance", [
            account,
            `0x${ethers.parseEther(String(amount)).toString(16).toUpperCase()}`,
        ])
        const balance = (await provider.getBalance(account)).toString()

        reply.statusCode = 201;
        reply.send({
            status: true,
            data: {
                balance
            }
        })
    } catch (error) {
        req.log.error(error)
        reply.send({
            status: false,
            error
        })
    }
})

app.get('/', async function (req, reply) {
    reply.send({
        status: true,
        message: "Heathly"
    })
})

app.get('/balance/:address', async function (req, reply) {
    const { address } = req.params
    console.log("address => ", address);

    try {
        if (!ethers.isAddress(address)) {
            reply.send({
                status: false,
                error: 'Invalid ethereum address'
            })
        }

        const balance = (await provider.getBalance(address)).toString()
        reply.send({
            status: true,
            data: {
                balance
            }
        })
    } catch (error) {
        reply.send({
            status: false,
            error
        })
    }
})

app.listen({
    port: PORT,
    host: '0.0.0.0'
}, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on ${PORT}`)
})