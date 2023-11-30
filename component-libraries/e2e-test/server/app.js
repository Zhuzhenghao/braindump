const express = require('express')

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    console.log('body', req.body)
    const { name, password } = req.body || {}
    let code;
    let message;
    if (name === 'admin' && password === '123') {
        code = 0
        message = 'login success'

    } else {
        code = 401
        message = 'login failed'

    }
    res.status(200).json({
        message,
        code,
        result: null
    })

})

app.post('/getList', (req, res) => {
    const { name } = req.body || {}
    let code;
    let message;
    const getRandomInt = (max, min = 0) => {
        const num = Math.floor(Math.random() * max)
        if(num < min) {
            return min
        }
        return Math.floor(Math.random() * max)
    }
    let list = Array(16).fill(null)
    list = list.map((item, index) => {
        const id = index + 1
        return {
            id,
            name: `我是 ${id}`,
            sex: getRandomInt(2),
            age: getRandomInt(50)
        }
    })
    if(name) {
        list = list.filter(item => item.name.includes(name))
    }
    
    res.status(200).json({
        message: 'success',
        code: 0,
        result: list
    })

})
app.listen(3000, () => {
    console.log('start server 8888')
})