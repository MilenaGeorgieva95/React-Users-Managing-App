import { useEffect, useState } from "react";
import userService from "../../api/userService";

export default function UserEdit({ userId, onSave, onClose }) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    userService
      .getOneUser(userId)
      .then((data) => {
        console.log(data);

        return setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="overlay">
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={onSave}>
            <div className="form-row" style={{ color: "black" }}>
              <div className="form-group">
                <label htmlFor="firstName">First name </label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.firstName}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.lastName}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.email}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.phoneNumber}
                  />
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  style={{ color: "black" }}
                  defaultValue={userInfo.imageUrl}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.address?.country}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city"></i>
                  </span>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.address?.city}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.address?.street}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-house-chimney"></i>
                  </span>
                  <input
                    id="streetNumber"
                    name="streetNumber"
                    type="text"
                    style={{ color: "black" }}
                    defaultValue={userInfo.address?.streetNumber}
                  />
                </div>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
