import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../redux/user/UserAction'


function UserContainer({userData, fetchUsers}) {
    
    useEffect( () => {
        fetchUsers()
    }, [])
        return userData.loading ? 
            ( <h2>Loading...</h2> ) :
                userData.error ? (
                    <h2>{userData.error}</h2>
                        ) : (
                <div>
                        <h2>Users List</h2>
                    <div className="alert alert-primary"> 
                        {
                            userData && 
                            userData.users &&
                            userData.users.map(user => 
                                <div>
                                    <p>{user.id} </p>
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                    <p>{user.address.street}</p>  
                                    <p>{user.address.zipcode}</p>
                                    <p>{user.phone}</p>
                                    <p>{user.website}</p>
                               
                                </div>
                            
                            
                        )
                        }
                    </div>
                 </div>
    )
}


const mapStateToProps = state => {
    return {
    userData : state.user
    }
}


const mapDispatchToProps = dispatch => {
    return  {
        fetchUsers : () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
