import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Divider } from 'primereact/divider';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import FoodCard from '../widgets/FoodCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import tacoTrompo from "../assets/tacos_trompo.png";
import tacoChicharron from "../assets/tacos_chicharron.png";
import tacoRes from "../assets/tacos_res.png";



const categories = [
  {
    id: 1, name: 'SUELTOS', subcategories: [
      {
        id: 1, name: "Maiz", products: [
          { id: 1, title: "Trompo", oldPrice: "Relleno de trompo acompañado de cebolla, cilantro y salsa picante. ", newPrice: "$19 c/u", image: tacoTrompo, description: "Tacos" },
          { id: 2, title: "Chicharron", oldPrice: "Relleno de chicharrón acompañado de cebolla, cilantro y salsa picante. ", newPrice: "$24 c/u", image: tacoChicharron, description: "Tacos" },

        ]
      },
      {
        id: 2, name: "Harina", products: [
          { id: 1, title: "Res", oldPrice: "Relleno de res acompañado de cebolla, cilantro y salsa picante. ", newPrice: "$32 c/u", image: tacoRes, description: "Tacos" },

        ]
      }
    ]
  },
  {
    id: 2, name: 'ESPECIALES', subcategories: [
      {
        id: 1, name: "Pirata", products: [
        ]
      },
      {
        id: 2, name: "Norteña", products: [
        ]
      },
      {
        id: 3, name: "Gringa", products: [
        ]
      },
    ]
  }
];

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Start with the first category

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveIndex(0); // Set activeIndex to 0 to select the first subcategory tab
  };

  return (
    <ErrorBoundary>
      <div style={{ backgroundColor: "var(--background)" }}>
        <img src={logo} alt="Logo" className="w-8rem h-auto px-4 py-2" />
        <div className='overflow-x-auto overflow-y-hidden white-space-nowrap py-2 px-3 mx-1' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              severity={selectedCategory.id === category.id ? 'danger' : 'secondary'}
              rounded
              className={selectedCategory.id === category.id ? 'mr-2' : 'bg-gray-400 opacity-30 mr-2'}
              onClick={() => handleCategorySelect(category)}
            >
              <h5 className="font-normal m-2 center" style={{ color: 'var(--white)' }}>{category.name}</h5>
            </Button>
          ))}
        </div>
        <div className="mx-4 mb-2">
          <Divider className="h-2" />
        </div>
        <div className="ml-4 mb-4 bg-secondary w-100">
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            {selectedCategory.subcategories.map((subcategory, index) => (
              <TabPanel key={index} header={subcategory.name} className='pr-5' style={{ backgroundColor: "var(--background)" }}>
                <div className='overflow-y-auto max max-h-30rem mt-2'>
                  {subcategory.products.map((product) => (
                    <div className='pb-3' key={product.id}>
                      <FoodCard
                        title={product.title}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        description={product.description}
                        image={product.image}
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabView>
        </div>

        <div className="flex flex-wrap justify-content-center pt-6 mt-6">

          <Button severity="danger" rounded>
            <div className='flex' style={{ alignItems: 'center' }}>
              <FavoriteIcon style={{ color: 'var(--background)', fontSize: "1rem" }} className='ml-2' />
              <h5 className="font-normal" style={{ color: 'var(--white)', margin: "1rem" }}>Favoritos</h5>
            </div>
          </Button>


        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Menu;
