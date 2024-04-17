import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios({
                method: "Get",
                url: "http://localhost:8000/api/companys/all",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center m-10'>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-5">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        value={password}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form