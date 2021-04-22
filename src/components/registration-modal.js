import React from 'react'

const RegistrationForm = (props) => {
    
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
                        <input type="text" placeholder="Ваше ФИО" className="form-control" required />
                    </div>
                    <div className="form-group mt-3" >
                        <input type="text" placeholder="Дата рождения" className="form-control" required />
                    </div>
                    <div className="form-group mt-3" >
                        <input type="password" placeholder="Пароль" className="form-control" required />
                    </div>
                    <div className="form-group mt-3" >
                        <input type="email" placeholder="Email" className="form-control" required />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
}   

export default RegistrationForm