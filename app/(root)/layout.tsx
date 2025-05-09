import MoibleNav from "@/components/shared/MoibleNav"
import Sidebar from "@/components/shared/Sidebar"




const Layout = ({ children }: { children: React.ReactNode }) => {
  return (


    <main className="root">
       <Sidebar/>
       <MoibleNav/>
      <div className='root-container'>
       <div  className='wrapper'>

       {children}
       
       </div>

      </div>
      </main>
  )
}

export default Layout