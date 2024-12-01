import '../assets/styles/settings.css'
import avatar from '../assets/images/my-avatar.jpg'
import NetflixNavbar from '../components/NetflixNavbar'

const Settings = () => {
  return (
    <div>
      <header>
        <NetflixNavbar />
      </header>
      <main className="mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col col-10 offset-1 col-lg-8 offset-lg-2">
              <p className="text-dark fs-3 fw-semibold border-bottom border-dark border-opacity-25 pb-2 mb-2">
                Account
              </p>
            </div>
          </div>
          <div className="row">
            <div className="firstColumn col 10 offset-1 col-lg-2 offset-lg-2 mb-3">
              <p className="text-dark text-opacity-25 fw-semibold">
                MEMBERSHIP & BILLING
              </p>
              <button className="btn btn-outline-dark bg-secondary bg-opacity-25 border-0 rounded-0 px-4">
                Cancel Membership
              </button>
              <hr className="col col-11 text-dark d-lg-none mt-3 mb-0" />
            </div>
            <div className="secondColumn col col-10 offset-1 col-lg-6 offset-lg-0">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-1">kingturtle@epicode.school</p>
                <p className="text-info fw-semibold mb-1">
                  Change account email
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-dark text-opacity-25 fw-semibold mb-1">
                  Password: ********
                </p>
                <p className="text-info fw-semibold mb-1">Change password</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-dark text-opacity-25 fw-semibold mb-1">
                  Phone: 347 847 7283
                </p>
                <p className="text-info fw-semibold mb-1">
                  Change phone number
                </p>
              </div>
              <hr className="text-dark mt-1 mb-2" />
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-1">
                  <i className="bi bi-paypal pe-2"></i>kingturtle@epicode.school
                </p>
                <p className="text-info fw-semibold mb-1">
                  Update payment info
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p></p>
                <p className="text-info fw-semibold mb-1">Billing details</p>
              </div>
              <hr className="text-dark mt-1 mb-2" />
              <div className="d-flex justify-content-between">
                <p></p>
                <p className="text-info fw-semibold mb-1">
                  Redeem gift card or promo code
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p></p>
                <p className="text-info fw-semibold mb-1">
                  Where to buy gift cards
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-10 offset-1 col-lg-8 offset-lg-2">
              <p className="text-dark fs-3 fw-semibold border-bottom border-dark border-opacity-25 pb-2 mb-2"></p>
            </div>
          </div>
          <div className="row">
            <div className="firstColumn col 10 offset-1 col-lg-2 offset-lg-2">
              <p className="text-dark text-opacity-25 fw-semibold mb-1">
                PLAN DETAILS
              </p>
            </div>
            <div className="secondColumn col col-10 offset-1 col-lg-6 offset-lg-0">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-1">
                  Premium<i className="ps-2 mt-0 bi bi-badge-4k"></i>
                </p>
                <p className="text-info fw-semibold mb-1">Change plan</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-10 offset-1 col-lg-8 offset-lg-2">
              <p className="text-dark fs-3 fw-semibold border-bottom border-dark border-opacity-25 pb-2 mb-2"></p>
            </div>
          </div>
          <div className="row">
            <div className="firstColumn col 10 offset-1 col-lg-2 offset-lg-2">
              <p className="text-dark text-opacity-25 fw-semibold mb-1">
                SETTINGS
              </p>
            </div>
            <div className="secondColumn col col-10 offset-1 col-lg-6 offset-lg-0">
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">Parental controls</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">Test participation</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">
                  Manage download devices
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">Activate a device</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">
                  Recent device streaming activity
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">
                  Sign out all devices
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-10 offset-1 col-lg-8 offset-lg-2">
              <p className="text-dark fs-3 fw-semibold border-bottom border-dark border-opacity-25 pb-2 mb-2"></p>
            </div>
          </div>
          <div className="row">
            <div className="firstColumn col 10 offset-1 col-lg-2 offset-lg-2">
              <p className="text-dark text-opacity-25 fw-semibold mb-1">
                MY PROFILE
              </p>
            </div>
            <div className="secondColumn col col-10 offset-1 col-lg-6 offset-lg-0">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-1">
                  <img className="myAvatar me-2" src={avatar} alt="avatar" />
                  King Turtle
                </p>
                <p className="text-info fw-semibold mb-1 text-end">
                  Manage profile
                  <span className="d-block">Add profile email</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-10 offset-1 col-lg-8 offset-lg-2">
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="firstColumn col 10 offset-1 col-lg-2 offset-lg-2">
              <p></p>
            </div>
            <div className="secondColumn col col-10 offset-1 col-lg-6 offset-lg-0">
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">Language</p>
                <p className="text-info fw-semibold mb-1">Viewing activity</p>
                <p className="d-none d-lg-inline-block"></p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">Playback settings</p>
                <p className="text-info fw-semibold mb-1">Ratings</p>
                <p className="d-none d-lg-inline-block"></p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-info fw-semibold mb-1">
                  Subtitle appearance
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings
