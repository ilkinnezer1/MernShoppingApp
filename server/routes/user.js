import express from "express"
import { updateUser,  deleteUser, getUser, getAllUser, currentUserStatus} from "../controller/user.js"
import{ verificationOfTokenAndAuthorization, verificationForAdminAndAuth } from "../middleware/verification.js"

const router = express.Router()
// CRUD - UPDATE
router.put("/:id", verificationOfTokenAndAuthorization, updateUser)
// CRUD -  DELETE
router.delete("/:id", verificationOfTokenAndAuthorization, deleteUser )
// CRUD - GET
router.get("/get/:id", verificationForAdminAndAuth, getUser)
// CRUD - GET (all users)
router.get("/",  verificationForAdminAndAuth, getAllUser)
// CRUD - USER STATUS
router.get("/status" , verificationForAdminAndAuth, currentUserStatus)

export default router;