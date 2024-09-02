import { Router } from "express";
import * as notesController from "./notes.controller.js"

const router=Router()

router.post('/addnote',notesController.addNote)
router.delete('/deletenote',notesController.deleteNote)

export default router