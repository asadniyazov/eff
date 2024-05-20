import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


const port = 3100

const app = express()

app.use(cors())
app.use(express.json())

const shopSchema = new mongoose.Schema({
    name: String,
    img: String,
    price: Number,
});
const ShopModel = mongoose.model('Shop', shopSchema);

app.get('/shop', async (req, res) => {
    const shop = await ShopModel.find()
    res.send(shop)
})
app.get('/shop/:id', async (req, res) => {
    const { id } = req.params
    const shop = await ShopModel.findById(id)
    res.send(shop)
})

app.post('/shop', async (req, res) => {
    const body = req.body
    const shop = new ShopModel(body)
    await shop.save()
    res.send(shop)
})
app.put('/shop/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const shop = await ShopModel.findByIdAndUpdate(id, body)
    res.send({ message: "put" })
})
app.delete('/shop/:id', async (req, res) => {
    const { id } = req.params
    const shop = await ShopModel.findByIdAndDelete(id)
    res.send({ message: "delete" })
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
    .then(() => console.log("Connected"))
    .catch(() => console.log("Not connected"))
    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})