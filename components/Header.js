import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <>
      <div className="drop-shadow-lg fixed top-0 h-fit w-full">
        <div className="w-full h-16 bg-white border-b flex justify-end">
          <div onClick={() => router.push("/login")}>Login</div>
        </div>
        <div className="w-full h-12 bg-white border-b"></div>
      </div>
    </>
  );
}

export default Header;
