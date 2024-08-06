import express from 'express';

const router = express.Router();

//APAGAR ESSA ROTA DEPOIS
router.get('/', async (req, res) => {
    return res.status(200).json({ message: "LINK PARA TESTAR APIs" })
})

export default router;