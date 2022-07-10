import React from 'react';
import ButtonSubmit from './Basics/ButtonSubmit';
import Input from './Basics/Email';
import Password from './Basics/Password';
import Center from './Basics/Center'

const LoginForm = () => {
  return (
    <>
        <Center>
            <form method="POST" action="" className='mb-3'>
                <div className="form-group mb-3">
                    <label htmlFor="username">Enter Your Register Number Or Email ID</label>
                    <Input inputName="username" placeholder="Enter Your Register Number" />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Enter Your password</label>
                    <Password inputName='password' placeholder="Enter Your Password"/>
                </div>
                <div className="form-group form-check">
                    <Input type="checkbox" className="form-check-input" inputName='remember' />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <ButtonSubmit value="Login"/>
            </form>
        </Center>
    </>
  )
}

export default LoginForm
