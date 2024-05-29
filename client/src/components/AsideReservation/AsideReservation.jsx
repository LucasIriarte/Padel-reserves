import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"
import axios from "axios";
import { getReservesDay } from "../../redux/reservesActions";


const AsideReservation = ({ onClose, hourReserve }) => {
    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.userDetails.userDetails)
    const booking = useSelector((state) => state.booking.booking)
    const shedules = useSelector((state) => state.shedules.shedules)
    const validName = /^[A-Za-z\s]+$/;
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validPhone = /^\d{10}$/;
    const isMounted = useRef(false)
    const initialStateErrors = {
        userName: "",
        phoneNumber: "",
        email: "",
        shiftEnd: ""
    }
    const [errors, setErrors] = useState(initialStateErrors)
    const initialStateForm = {
        userName: "",
        phoneNumber: "",
        email: "",
        dateAppointment: booking,
        shiftStart: hourReserve,
        shiftEnd: "",
        userId: userDetails.id
    }
    const [form, setForm] = useState(initialStateForm)
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (isMounted.current) {
            if (JSON.stringify(errors) === JSON.stringify(initialStateErrors)) {
                axios.post("/reserves", form)
                    .then((value) => {
                        if (value.data === "that shift has already been taken") {
                            Swal.fire({
                                icon: "error",
                                title: value.data,
                                showConfirmButton: false,
                            });
                            setForm(initialStateForm)
                            dispatch(getReservesDay(booking))
                            onClose()
                        }
                        if (value.data === "Reserve created successfull!") {
                            Swal.fire({
                                title: value.data ,
                                confirmButtonText: "Ok",
                            })
                            setForm(initialStateForm)
                            dispatch(getReservesDay(booking))
                            onClose()
                        }
                    })
            }
        } else {
            isMounted.current = true;
        }
    }, [errors]);
    const handleFormSubmit = (e) => {
        e.preventDefault()
        validate()
    }

    const validate = () => {
        const newErrors = { ...initialStateErrors }
        if (validName.test(form.userName)) {
            newErrors.userName = ""
        }
        if (!form.userName) {
            newErrors.userName = "The name is required"
        }
        if (!validName.test(form.userName) && form.userName !== "") {
            newErrors.userName = "No numbers in the name"
        }
        if (!form.phoneNumber) {
            newErrors.phoneNumber = "The phone is required"
        }
        if (validPhone.test(form.phoneNumber)) {
            newErrors.phoneNumber = ""
        }
        if (!validPhone.test(form.phoneNumber)) {
            newErrors.phoneNumber = "It should have 10 numbers"
        }
        if (validEmail.test(form.email)) {
            newErrors.email = ""
        }
        if (!validEmail.test(form.email) && form.email !== "") {
            newErrors.email = "Email is not valid"
        }
        if (!form.shiftEnd) {
            newErrors.shiftEnd = "Shift duration is required"
        }
        setErrors(newErrors)
    }
    const handleOptionHour = (e) => {
        const value = e.target.value
        setForm({
            ...form,
            shiftEnd: value
        })
    }

    return (
        <div className="fixed top-0 right-0 w-screen h-screen bg-black/[.4] z-20 flex justify-end">
            <div className="bg-white w-4/5">
                <div>
                    <AiOutlineCloseSquare className="h-8 w-8" onClick={onClose} />
                </div>
                <div>
                    <button onClick={()=>dispatch(getReservesDay(booking))}>Probando</button>
                </div>
                <h1 className="text-center text-4xl font-bold font-bebas">Reservation at {hourReserve}</h1>
                <h3 className="pl-8 pt-8 text-2xl">Information reserve</h3>
                <form action="" className="flex flex-col items-start justify-around h-auto pl-8 pt-4 w-full">
                    <div className="flex flex-col w-full relative">
                        <label className="text-xl">Name <strong className="text-red-700">*</strong></label>
                        <input type="text" onChange={(e) => handleForm(e)} value={form.userName} name="userName" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="Martín..." />
                        {errors.userName && <span className="absolute top-1 right-16 text-red-700 font-bold">{errors.userName}</span>}
                    </div>
                    <div className="flex flex-col w-full pt-5 relative">
                        <label className="text-xl">Phone <strong className="text-red-700">*</strong></label>
                        <input type="number" onChange={(e) => handleForm(e)} value={form.phoneNumber} name="phoneNumber" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="1154649853" />
                        {errors.phoneNumber && <span className="absolute top-6 right-16 text-red-700 font-bold">{errors.phoneNumber}</span>}
                    </div>
                    <div className="flex flex-col w-full pt-5 relative">
                        <label className="text-xl">Email (optional)</label>
                        <input type="text" onChange={(e) => handleForm(e)} value={form.email} name="email" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="example@gmail.com" />
                        {errors.email && <span className="absolute top-6 right-16 text-red-700 font-bold">{errors.email}</span>}
                    </div>
                </form>
                <div className="pl-8">
                    <h3 className="text-xl pt-8">Duration:</h3>
                    <div className="w-full relative">
                        <select defaultValue={""} onChange={handleOptionHour}>
                            <option value={""} disabled>-- Hours --</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 1]}>Half hour</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 2]}>1 Hour</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 3]}>1 Hour and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 4]}>2 Hours</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 5]}>2 Hours and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 6]}>3 Hours</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 7]}>3 Hours and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve) + 8]}>4 Hours</option>
                        </select>
                        {errors.shiftEnd && <span className="absolute top-[-1.5rem] left-20 text-red-700 font-bold">{errors.shiftEnd}</span>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-primary-5 px-2 text-2xl text-white rounded-lg py-2 mt-4" onClick={handleFormSubmit}>Make reserve</button>
                </div>
            </div>
        </div>
    )
}

export default AsideReservation