import React from "react";



export const TableReservations = () => {
    const hours = []
    for (let i = 9; i <= 23; i++) {
        i == 9 ? hours.push([`0${i}:00`, `0${i}:30`]) : i == 23 ? hours.push([`${i}:00`]) : hours.push([`${i}:00`, `${i}:30`])
    }

    const makeReserve = (e) => {
        console.log(e)
    }

    return (
            <div className="relative w-fit mx-auto">
                <table className="relative z-10">
                    <caption className="bg-slate-300 text-center font-bold h-12">Cancha padel</caption>
                    <tbody className="border-collapse">
                        {
                            hours.flat().map(appointment => <tr key={appointment}>
                                <td className="h-14 w-16 text-center border border-b-slate-300">{appointment}</td>
                                <td className="border border-b-slate-300 w-64 h-14"> <button className="bg-fuchsia-600 w-full h-14" onClick={(e)=>makeReserve(appointment)}>espacio disponible</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {/* <table className="absolute top-12 left-16 w-64 z-20">
                    <tbody>
                        {
                            hours.flat().map(e => <tr key={e}><td className="h-14 w-auto ml-16 bg-sky-700 border">a{e}</td></tr>)
                        }
                    </tbody>
                </table> */}
            </div>
    )
}