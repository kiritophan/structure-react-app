import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { counterActions } from '@stores/slices/counter.slice';
import Loading from "@components/Loadings/Loading";
import UserForm from '@components/UserForms/UserForm';

export default function About() {
  const dispatch = useDispatch();
  const counterStore = useSelector(store => store.counterStore)
  const [dataForm, setDataForm] = useState(null)

  useEffect(() => {
    dispatch(counterActions.findAllUsers())
  }, [])

  useEffect(() => {
    console.log("counterStore.users", counterStore.users)
  }, [counterStore.users])

  // control userform
  const [showUserForm, setShowUserForm] = useState(false);
  return (
    <div>
      {
        counterStore.loading ? <Loading /> : <></>
      }
      {
        showUserForm ? <UserForm dataForm={dataForm}></UserForm> : <></>
      }
      <h1>About Page </h1>
      <button className="btn btn-primary" onClick={() => {
        setShowUserForm(true)
        setDataForm({
          functionCloseForm: setShowUserForm,
          type: 'add',
          functionSubmit: counterActions.createNewUsers
        })
      }}>Add new user</button>
      <br></br>
      {
        counterStore.users.map((user) =>
          <Fragment key={user.id}>
            <div onContextMenu={(e) => { //huy hanh vi mac dinh cua chuot phai
              e.preventDefault()
              dispatch(counterActions.setStatusUser({
                userId: user.id,
                patchData: {
                  block: !user.block
                }
              }))
            }}  style={{textDecoration: user.block ? 'line-through' : ""}}> UserId: {user.id}
              <br /> UserName:{user.name}
              <br />UserEmail:{user.email}
              <br />UserPhoneNumber:{user.phoneNumber}
            </div>
            <button style={{ marginRight: '10px' }} onClick={() => {
              dispatch(counterActions.deleteUserByID(user.id))
            }} type="button" className="btn btn-danger">Delete</button>
            <button className="btn btn-success" onClick={() => {
              setShowUserForm(true)
              setDataForm({
                functionCloseForm: setShowUserForm,
                type: 'update',
                functionSubmit: counterActions.updateUser,
                preData: user
              })
            }}>Edit</button>
          </Fragment>
        )
      }
      <br></br>


      <Outlet></Outlet>
    </div>
  )
}
