import express, { Request, Response, Router } from "express";
const router = express.Router();

interface Product {
    id: number,
    name:string,
    age:number
}

let products: Product[] = [];
let currentId : number = 1;

// POST /api/products
router.post('/',(req:Request,res:Response) => {
    const doc:Product = {
        id: currentId++,
        name: req.body.name,
        age: req.body.age
    };
    products.push(doc);
    res.status(201).send(doc)
})

// GET /api/products
router.get('/', (req: Request, res: Response) => {
    res.send(products)
})

// GET /api/products/:id
router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const product = products.find(i => i.id === parseInt(id));
    if(product){
        res.send(product)
    } else {
        res.status(404).json({message:'Product Not Found'})
    }
})

// PUT /api/products/:id
router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedoc:Product = req.body;
    const index = products.findIndex(i => i.id === parseInt(id))
    if(index !== -1) {
        products[index] = {...products[index],...updatedoc}
        res.json(products[index])
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
})

// DELETE /api/products/:id
router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const index = products.findIndex(i => i.id === parseInt(id))
    if(index !== -1) {
        const deletedProduct = products.splice(index,1);
        res.json(deletedProduct[0])
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
})

export default router