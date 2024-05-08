import { useEffect, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useSelector } from "react-redux";


const AsideReservation = ({ onClose, hourReserve }) => {
    const booking = useSelector((state)=> state.booking.booking)
    const shedules = useSelector((state)=> state.shedules.shedules)
    const validName = /^[A-Za-z\s]+$/;
    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validPhone = /^\d{10}$/;
    const [errors, setErrors] = useState({
        name:"",
        phone:"",
        email:"",

    })
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        dateAppointment:booking,
        hourShift:hourReserve,
        hourEnd:""
    })
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        validate()
        console.log(form)
    },[form])

    const validate = () => {
        const newErrors = {}
        if(validName.test(form.name)){
            newErrors.name=""
        }
        if(!validName.test(form.name) && form.name !== ""){
            newErrors.name="no numbers in the name"
        }
        if(validPhone.test(form.phone)){
            newErrors.phone=""
        }
        if(!validPhone.test(form.phone)){
            newErrors.phone="It should only have 10 numbers"
        }
        if(validEmail.test(form.email)){
            newErrors.email = ""
        }
        if(!validEmail.test(form.email) && form.email !== ""){
            newErrors.email = "email is not valid"
        }
        setErrors(newErrors)
    }
    const handleOptionHour = (e) => {
        const value = e.target.value
        setForm({
            ...form,
            hourEnd:value
        })
    }

    return (
        <div className="fixed top-0 right-0 w-screen h-screen bg-black/[.4] z-20 flex justify-end">
            <div className="bg-white w-4/5">
                <div>
                    <AiOutlineCloseSquare className="h-8 w-8" onClick={onClose} />
                </div>
                <h1 className="text-center text-4xl font-bold font-bebas">Reservation at {hourReserve}</h1>
                <h3 className="pl-8 pt-8 text-2xl">Information reserve</h3>
                <form action="" className="flex flex-col items-start justify-around h-auto pl-8 pt-4 w-full">
                    <div className="flex flex-col w-full">
                        <label className="text-xl">Name</label>
                        <input type="text" onChange={(e) => handleForm(e)} value={form.name} name="name" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="Martín..." />
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-xl">Phone</label>
                        <input type="number" onChange={(e)=>handleForm(e)} value={form.phone} name="phone" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="1154649853" />
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-xl">Email (optional)</label>
                        <input type="text" onChange={(e) => handleForm(e)} value={form.email} name="email" className="w-5/6 h-10 rounded-lg mt-1 border border-primary-5 placeholder:text-gray-300 pl-2 focus:outline-none" placeholder="example@gmail.com" />
                    </div>
                </form>
                <div className="pl-8">
                    <h3 className="text-xl pt-8">Duration:</h3>
                    <div className="w-full">
                        <select name="" id="" onChange={handleOptionHour}>
                            <option value={shedules[shedules.indexOf(hourReserve)+1]}>Half hour</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+2]}>1 Hour</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+3]}>1 Hour and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+4]}>2 Hours</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+5]}>2 Hours and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+6]}>3 Hours</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+7]}>3 Hours and half</option>
                            <option value={shedules[shedules.indexOf(hourReserve)+8]}>4 Hours</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-primary-5 px-2 text-2xl text-white rounded-lg py-2 mt-4">Make reserve</button>
                </div>
            </div>
        </div>
    )
}

export default AsideReservation