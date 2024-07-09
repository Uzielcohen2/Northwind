import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import "./PasswordInput.css";





function PasswordInput(): JSX.Element {

    // UseState
    const [visible, setVisible] = useState(false);

    // Use Form
    const { register } = useFormContext();

    return (
        <div className="PasswordInput">

            {/* Password label */}
            <label htmlFor="password" className="pass-label">Password</label>

            {/* Input Label */}
            <div>
                <input
                    type={visible ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="pass-input"
                    {...register("password", { required: true, minLength: 5 })} />

                {/* Eye Visible */}
                <div className="eyeVisible" onClick={() => setVisible(!visible)}>
                    {visible ? <LuEye /> : <IoEyeOffOutline />} <p className="p-pass">show password</p>
                </div>
            </div>



        </div>
    );
}

export default PasswordInput;
