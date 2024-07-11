import express from "express";
import { createEmail, deleteEmail, getAllEmailsById } from "../controllers/email_controller.js";
import isAuthenticated from "../middleware/isAuntheticated.js";

const router = express.Router();


router.route('/create').post(isAuthenticated,createEmail);
router.route('/:id').delete(deleteEmail);
router.route('/getAllEmails').get(isAuthenticated, getAllEmailsById);


export default router;