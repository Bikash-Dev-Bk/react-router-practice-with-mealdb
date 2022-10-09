import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import MealDB from './components/MealDB/MealDB';
import MealDetails from './components/MealDetails/MealDetails';
import Restaurant from './components/Restaurant/Restaurant';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home>},
        { path: '/about', element: <About></About>},
        { path: '/restaurant', element: <Restaurant></Restaurant>},
        { path: '/mealdb', 
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
          },
          element: <MealDB></MealDB>
        },
        { path: 'meal/:idMeal', 
          loader: async ({params}) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
          },
          element: <MealDetails></MealDetails>
        }
      ]
    },
    
    { path: '*', element: <div>This Page is not Found! 404 </div>}
  ]);
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
