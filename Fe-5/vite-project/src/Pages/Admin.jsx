import React, { useEffect, useState } from 'react'
import "./Admin.scss"
function Admin() {
    const [Admin, setAdmin] = useState([])
    const [Search, setSearch] = useState("")
    useEffect(() => {
        name()
    }, [])
    async function name() {
        const res = await fetch("http://localhost:3100/shop")
        const data = await res.json()
        setAdmin(data)
    }
    async function Delete(id) {
        const res = await fetch("http://localhost:3100/shop/" + id, { method: "delete" })
        name()
    }
    function Sorted() {
        Admin.toSorted((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }
    return (
        <>
            <div>
                    <input value={Search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button onClick={()=>Sorted()}>A-z</button>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Admin.filter((x)=>x.name.toLowerCase().includes(Search.toLowerCase()))
                        .map((x) =>
                            <>
                                <tr key={x._id}>
                                    <td>{x._id}</td>
                                    <td>{x.name}</td>
                                    <td><img src={x.img} /></td>
                                    <td>{x.price}</td>
                                    <td><button onClick={() => Delete(x._id)}>Delete</button></td>

                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin