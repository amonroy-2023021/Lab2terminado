import { Router } from "express";
import { saveAppointment, getAppointments, updateAppointment, ChangeAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointments, getAppointments);
router.patch("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment)
router.patch("/changeAppointment/:uid", ChangeAppointment)

export default router;