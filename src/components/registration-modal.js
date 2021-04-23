import React, {useState, useEffect} from 'react'

const RegistrationForm = (props) => {
    const [fio, setFio] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [submited, setSubmited] = useState(false)

    const fioChange = (e) => {
        setFio(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    const dobChange = (e) => {
        setDob(e.target.value)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        setSubmited(true)

        if (validateFio() && validateDob() && validatePassword() && validateEmail()) {
            document.getElementById('closeButton').click()
        } 
    }

    const validateFio = () => {
        if (fio.length === 0) {
            return false
        }

        return true
    }

    const validateDob = () => {
        if (dob.length === 0) {
            return false
        }

        return true
    }

    const validatePassword = () => {
        if (password.length < 6) {
            return false
        }

        return true
    }

    const validateEmail = () => {
        if (email.length === 0) 
            return false
        

        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email))
            return true
        
        return false
    }

    return <div className="modal fade" id="registrationModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Регистрация</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form className="needs-validation" noValidate>
                    <div className="form-group" >
                        <input type="text" 
                            placeholder="Ваше ФИО" 
                            className={validateFio() ? "form-control" : !submited ? "form-control" : "form-control is-invalid"}
                            value={fio} 
                            onChange={fioChange}
                            required />
                        <div class="invalid-feedback">
                            Заполните ФИО!
                        </div>
                    </div>
                    <div className="form-group mt-3" >
                        <input type="date"
                            placeholder="Дата рождения" 
                            className={validateDob() ? "form-control" : !submited ? "form-control" : "form-control is-invalid"} 
                            value={dob} 
                            onChange={dobChange}
                            required />
                        <div class="invalid-feedback">
                            Заполните Дату!
                        </div>
                    </div>
                    <div className="form-group mt-3" >
                        <input type="password" 
                            placeholder="Пароль" 
                            className={validatePassword() ? "form-control" : !submited ? "form-control" : "form-control is-invalid"} 
                            value={password}
                            onChange={passwordChange}
                            required />
                        <div class="invalid-feedback">
                            Заполните Пароль!
                        </div>
                    </div>
                    <div className="form-group mt-3" >
                        <input type="email" 
                            placeholder="Email" 
                            className={validateEmail() ? "form-control" : !submited ? "form-control" : "form-control is-invalid"} 
                            value={email} 
                            onChange={emailChange}
                            required />
                        <div class="invalid-feedback">
                            Заполните электронную почту!
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" id="closeButton">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} >Save changes</button>
            </div>
            </div>
        </div>
    </div>
}   

export default RegistrationForm