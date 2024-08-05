import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";
import { NextUIProvider } from "@nextui-org/react";
import PodcastFeed from "./components/PodcastFeed";
import PodcastInformation from "./components/PodcastInformation";
import DiscoverPage from "./components/DiscoverPage";
import PodcasterProfile from "./components/PodcasterProfile";
import PodcastForm from "./components/PodcastForm";

const Layout = ()=>{
  return(
    <div className="flex">
      <LeftBar />
      <div className="mt-10 mx-12 flex-1">
        <Outlet />
      </div>
      <RightBar />
    </div>
  )
}

function App() {

  const navigate = useNavigate();

  return ( 
   <NextUIProvider navigate={navigate}>
    <main className="dark text-foreground bg-background">
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<PodcastFeed />} />
              <Route path="/podcastInfo" element={<PodcastInformation />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/profile" element={<PodcasterProfile />} />
              <Route path="/createpodcast" element={<PodcastForm />} />

          </Route>
      </Routes>
    </main>
    </NextUIProvider>
  )
}

export default App
