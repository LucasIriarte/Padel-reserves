import Header from "../../components/Header/Header.jsx"
import UserTable from "../../components/UserTable/UserTable.jsx"
import { TableReservations } from "../../components/TableReservations/TableReservations"

export const Admin = () => {
    return (
        <>
            <Header/>
            <TableReservations/>
            <UserTable/>
        </>
    )
}