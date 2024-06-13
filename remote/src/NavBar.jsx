export default function NavBar() {
  return (
    <nav className="width-full bg-red-500 text-white">
      <div className="flex justify-between w-11/12 m-auto py-4">
        <div>My NavBar</div>
        <div className="grid grid-cols-3">
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">contacts</a>
        </div>
      </div>
    </nav>
  );
}
