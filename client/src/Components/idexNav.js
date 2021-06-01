import React, {useEffect} from 'react'
import Navbar from './Navbars'
import NavAdmin from './NavAdmin'
import Cookies from 'universal-cookie';

const cookie = new Cookies()

 function IdexNav() {
    return (
        <>
        {!cookie.get('admin')? <Navbar />: <NavAdmin/>}
    
    </>
    )
}

export default IdexNav