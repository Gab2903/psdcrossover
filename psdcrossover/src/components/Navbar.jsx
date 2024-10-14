const Navbar = () => {
    return (
    <>

<div className="navbar justify-end px-20">
  <div className="navbar-center lg:flex">
    <ul className="menu-horizontal gap-10">
      <li><a className="hover:underline hover:underline-offset-8 decoration-4 decoration-primary">HOME</a></li>
      <li><a className="hover:underline hover:underline-offset-8 decoration-4 decoration-primary">ABOUT</a></li>
      <li><a className="hover:underline hover:underline-offset-8 decoration-4 decoration-primary">SPEAKERS</a></li>
      <li><a className="hover:underline hover:underline-offset-8 decoration-4 decoration-primary">SCHEDULE</a></li>
    </ul>
    <a className="btn btn-primary">Contact Us</a>
  </div>
</div>



    </>
)
}

export default Navbar