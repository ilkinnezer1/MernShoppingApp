import express from "express"
import {verificationForAdminAndAuth} from "../middleware/verification.js"
import { 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProduct, 
    getAllProducts} from "../controller/product.js"


const router = express.Router()
// CRUD - CREATE
router.post("/" ,verificationForAdminAndAuth, createProduct)
router.put("/:id", verificationForAdminAndAuth, updateProduct)
router.delete("/:id", verificationForAdminAndAuth, deleteProduct)
router.get("/get/:id", getProduct)
router.get("/", getAllProducts)

export default router;