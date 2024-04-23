import { AiOutlineCloseSquare } from "react-icons/ai"


const AsideReservation = ({ onClose }) => {
    return (
        <div className="fixed top-0 right-0 w-screen h-screen bg-black/[.4] z-20 flex justify-end">
            <div className="bg-slate-200 w-4/5">
                <div>
                    <AiOutlineCloseSquare className="h-8 w-8" onClick={onClose} />
                </div>
                <h1 className="text-center text-4xl font-bold font-bebas">Make reserve </h1>
                <h3 className="pl-8 pt-8 text-2xl">Information reserve</h3>
                <form action="" className="flex flex-col items-start justify-around h-auto pl-8 pt-4 w-full">
                    <div className="flex flex-col w-full">
                        <label className="text-xl">Nombre:</label>
                        <input type="text" className="w-5/6 h-10 rounded-lg mt-1" />
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-xl">Telefono:</label>
                        <input type="text" className="w-5/6 h-10 rounded-lg mt-1" />
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-xl">Correo electronico:</label>
                        <input type="text" className="w-5/6 h-10 rounded-lg mt-1" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AsideReservation