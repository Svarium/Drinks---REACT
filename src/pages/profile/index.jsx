import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


export const Profile = () => {
  const { userProfile, getProfile } = useAuth();



  

  useEffect(() => {
    getProfile();
  }, []);

  return (
    userProfile && (
        <div className="row justify-content-center">
      <div className="m-5 col-6 shadow ">
        <div className="card">
          <div className="card-header">Datos Personales</div>
          <div className="card-body">
            <h5 className="card-title">{userProfile.name}</h5>
            <p className="card-text">{userProfile.email}</p>
            <Link to={'/'} className="btn btn-primary">
              Ir al inicio
            </Link>
          </div>
        </div>
        
      </div></div>
    )
  );
};
