import React from 'react';
import ButtonSubmit from './Basics/ButtonSubmit';
import Input from './Basics/Email';
import Password from './Basics/Password';
import Center from './Basics/Center';
import Email from './Basics/Email';

const LoginForm = () => {
  return (
    <>
        <Center border={true}>

            <form method="POST" action="" className='mb-3'>
                <div className='row'>

                    <div className="col-md-6">

                        <div className="form-group mb-3">
                            <label htmlFor="fname">Enter Your First Name</label>
                            <Input inputName="fname" placeholder="Enter Your First Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <label htmlFor="lname">Enter Your Second Name</label>
                            <Input inputName="lname" placeholder="Enter Your Second Name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mb-3">
                        <label htmlFor="email">Enter Your Email Id</label>
                        <Email placeholder="Enter your Email" inputName='email'/>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mb-3">
                        <label htmlFor="email">Enter Your Register No.</label>
                        <Input placeholder="Enter your Register No." inputName='reg_no'/>
                    </div>
                </div>

                <div className="row">

                    <div className='col-md-6'>

                        <div className='form-group'>
                            <label htmlFor='password'>Enter Your password</label>
                            <Password inputName='password' placeholder="Enter Your Password"/>
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <div className='form-group'>
                            <label htmlFor='password'>Confirm Password</label>
                            <Password inputName='password' placeholder="Confirm Your Password"/>
                        </div>
                    </div>
                </div>
                <ButtonSubmit value="Register"/>

            </form>
        </Center>
    </>
  )
}

export default LoginForm
