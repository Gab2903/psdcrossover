const Navbar = () => {
    return (
    <>
<section className="absolute top-24 right-24">
    <nav className="flex align-middle gap-6 justify-end">
        <ul className="flex gap-4">
            <li className="pb-2 hover:border-b-4 border-primary"><a className="hover:font-bold " href="#">Home</a></li>
            <li  className="pb-2 hover:border-b-4 border-primary"><a className="hover:font-bold" href="#">About</a></li>
            <li  className="pb-2 hover:border-b-4 border-primary"><a className="hover:font-bold" href="#">Speakers</a></li>
            <li  className="pb-2 hover:border-b-4 border-primary"><a className="hover:font-bold" href="#">Schedule</a></li>
        </ul>
        <button className="bg-primary text-base-100 font-bold py-1.5 px-10 rounded-md">Contact Us</button>
    </nav>
</section>
    </>
)
}

export default Navbar