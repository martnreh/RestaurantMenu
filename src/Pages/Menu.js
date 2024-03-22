import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Divider } from 'primereact/divider';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';


function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  return <div style={{ backgroundColor: "var(--background" }}>

    <div>

      <img src={logo} alt="Logo" className="w-8rem h-auto p-4" />


      
      <div className="	gap-2 py-2 mx-4">
       
        <Button severity="danger" rounded>
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>SUELTOS</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>   <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>

        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>
        <Button severity="secondary" rounded className="bg-gray-400	opacity-30">
          <h5 className="font-normal m-2" style={{ color: 'var(--white)' }}>ESPECIALES</h5>
        </Button>

      </div>

      <div className="mx-4 my-2">
        <Divider className="h-2" ></Divider>
      </div>

      <div className="mx-4 my-4">

        <TabView className='' activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{ backgroundColor: "var(--background" }}>
          <TabPanel header="Maiz" className='pr-5'>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel header="Harina">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>

        </TabView>
      </div>








    </div>















  </div>;


}

export default Menu;
