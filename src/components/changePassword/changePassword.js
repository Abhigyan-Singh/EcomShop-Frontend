import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import './changePassword.css';
import { useCookies } from 'react-cookie';
import { Cookies } from 'react-cookie';
import axios from 'axios';
let jwt;

export default function ChangePassword() {
    const [cookies, setCookie] = useCookies();
    const { } = cookies;
    const cookie = new Cookies();
    const [oldPassword, setoldPassword] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, seterror] = useState(false);
    const [error1, seterror1] = useState(false);
    const [error2, seterror2] = useState(false);
    const [error3, seterror3] = useState(false);
    const [error4, seterror4] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        jwt = cookie.get('user');
    }, [cookies.userName,]);
    const saveChange = () => {
        console.log(oldPassword, password, confirmPassword);
        if (!!oldPassword && !password && !confirmPassword) {
            seterror(true)
            seterror4(false)
            seterror3(false)
            seterror2(false)
            seterror1(false);
        } else if (!oldPassword && !!password && !confirmPassword) {
            seterror1(true);
            seterror(false)
            seterror4(false)
            seterror3(false)
            seterror2(false)
        } else if (!oldPassword && !password && !!confirmPassword) {
            seterror2(true)
            seterror1(false);
            seterror(false)
            seterror4(false)
            seterror3(false)

        } else if (!oldPassword && !password && !confirmPassword) {
            seterror3(true)
            seterror2(false)
            seterror1(false);
            seterror(false)
            seterror4(false)
        } else if (!!oldPassword && !!password && !!confirmPassword) {

            if (password !== confirmPassword) {
                seterror4(true)
                seterror3(false)
                seterror2(false)
                seterror1(false);
                seterror(false)
            } else {
                let Body = {
                    confirmPassword: confirmPassword,
                    oldPassword: oldPassword,
                    password: password
                }
                const headers = { 'Authorization': 'Bearer ' + jwt.token, };
                axios.put(`http://localhost:8009/user/change-password/${cookies.userName}`, Body, { headers })
                    .then(res => {
                        console.log(res.data.data)
                        if (res.data.success == 1) {
                            navigate('/myaccountinformation')
                        }
                    })
            }
        }
    }


    return (
        <div className="pad">
            <div className="header-gray"><a href="/myAccount">My Account</a> &gt;
                <a href="/myaccountinformation">Account &amp; Password</a> &gt; Change Password</div>

            <div className="myAccountSubHeader margin-20px-btm">Change Password</div>
            <div>Please make any necessary changes to the information below. Press "Save Changes" when you're done.</div>
            <div id="errorsContainer" style={{ fontWeight: 'bold', color: 'red' }}>
                {(error == true && error1 == false && error2 == false && error3 == false && error4 == false) &&
                    <>
                        <div>New Password is required</div>
                        <div>Re-enter Password is required</div></>

                }
                {(error == false && error1 == true && error2 == false && error3 == false && error4 == false) &&
                    <>
                        <div> Old Password is required</div>
                        <div> Password must be between 8 and 16 characters long</div>
                        <div>  Password should contain at least one number and one character</div>
                        <div>   Re-enter Password is required  </div>
                    </>
                }
                {(error == false && error1 == false && error2 == true && error3 == false && error4 == false) &&
                    <>
                        <div>Old Password is required</div>
                        <div>New Password is required</div>
                        <div> Password re-entered does not match</div>
                    </>
                }
                {(error == false && error1 == false && error2 == false && error3 == true && error4 == false) &&
                    <>
                        <div>Old Password is required</div>
                        <div>New Password is required</div>
                        <div>Re-enter Password is required</div>
                    </>

                }
                {(error4 == true && error1 == false && error2 == false && error3 == false && error == false) &&
                    <>
                        <div>Password must be between 8 and 16 characters long</div>
                        <div>Password should contain at least one number and one character</div>
                        <div>Password re-entered does not match</div>
                    </>

                }
            </div>
            <div className="account-info-box margin-10">
                <div className="account-header">
                    <span className="header">USER NAME</span> {cookies.userName}
                </div>
                <form method="post" action="changepassword" id="changepassword">
                    <div className="forgot-row pad">
                        <span className="header">Please type your OLD Password</span>
                        <p class="mar-tb-10">Required fields are marked with an asterisk <span className="copy-red">*</span>.</p>
                        <div>
                            <label for="oldPassword" style={{ fontWeight: 'normal' }}><span className="copy-red">*</span> OLD Password</label>
                            <input type="password" className="f-sign-up__field required-field" id="oldPassword"
                                name="oldPassword" size="21" maxlength="16" autocomplete="off"
                                value={oldPassword}
                                onChange={(event) => setoldPassword(event.target.value)} />
                        </div>
                    </div>
                    <div className="forgot-row pad">
                        <span className="header">Please type your NEW Password</span>
                        <p class="mar-tb-10">Required fields are marked with an asterisk <span className="copy-red">*</span>. Password must be between 8 and 16 characters long.</p>

                        <div className="margin-20px-btm">
                            <label for="newPassword" style={{ fontWeight: 'normal' }}><span className="copy-red">*</span> NEW Password</label>
                            <input type="password" className="f-sign-up__field required-field" id="newPassword" name="newPassword"
                                size="21" maxlength="16" autocomplete="off"
                                value={password}
                                onChange={(event) => setpassword(event.target.value)} />
                        </div>
                        <div>
                            <label for="reEnterPassword" style={{ fontWeight: 'normal' }}><span className="copy-red">*</span> Re-enter NEW Password</label>
                            <input type="password" className="f-sign-up__field required-field" id="reEnterPassword" name="reEnterPassword"
                                size="21" maxlength="16" autocomplete="off"
                                value={confirmPassword}
                                onChange={(event) => setconfirmPassword(event.target.value)} />
                        </div>
                    </div>
                    <div className="forgot-row pad">
                        <div className="header">Be sure to record your Username and Password and keep them in a safe place.</div>
                        (But not to worry, if you do happen to lose them, we can help you out.)
                    </div>
                </form>
            </div>
            <div className="button-box-sec margin-10">
                <input type="button" value="CANCEL" alt="Cancel" className="btn-responsive f-sign-up__btn left" onClick={()=>navigate('/myaccountinformation')} />
                <input type="button" value="SAVE CHANGES" alt="Save Changes" className="btn-responsive f-sign-up__btn right" onClick={saveChange} />

            </div>
        </div>
    )
}