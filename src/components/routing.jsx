import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "./login"
import { Home } from "./Home"
import { NewOrder } from "./newOrder"
import  OldOrders  from "./oldOrders"
import { ServicePage } from "./servicePage"
import { Manage } from "./manage"
import { ManageProducts } from "./manageProducts"
import { ManageCustomers } from "./manageCustomers"
import { ManageEmployees } from "./manageEmployees"
import { NewCustomer } from "./newCustomer"
import { EmpOrderList } from "./empOrderList"
import { Welcome } from "./welcome"
import  Reports  from "./reports"
import  Settings  from "./settings"
import Profile from "./Profile"


export const Routing = () => {

    return <>
        <Routes>
        <Route path="*" element={<Navigate to="/welcome" replace />} />
             <Route path="/login" element={<Login />}></Route>
            <Route path='/newcustomer' element={<NewCustomer />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/newOrder' element={<NewOrder />} />
            <Route path='/Orders' element={<OldOrders />} />
            <Route path='/Manage/ManageCustomers/custOrderList' element={<OldOrders />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/Manage' element={<Manage />} />
            <Route path='/Manage/ManageProducts' element={<ManageProducts />} />
            <Route path='/Manage/ManageCustomers' element={<ManageCustomers />} />
            <Route path='/Manage/ManageEmployees' element={<ManageEmployees />} />
            <Route path='/Manage/Reports' element={<Reports />} />
            <Route path='/Manage/Setting' element={<Settings />} />
            <Route path='/listOrdersForEmployee' element={<EmpOrderList />} />
            {/* <Route path="/" element={<Login />}/> */}
        </Routes>
    </>
}