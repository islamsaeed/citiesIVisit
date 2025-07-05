import AppNav from "../component/AppNav";
import PageNav from "../component/PageNav";
import Navbar from "../component/PageNav";

function AppLayout() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <p>app</p>
    </div>
  );
}

export default AppLayout;
