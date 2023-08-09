import { useState } from "react";
import styles from "./App.module.css";
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import images from "./Jsons/Images.json";

const App = () => {
  const [categoryImage, setCategoryImage] = useState(images);

  const handleCategoryChange = (newCategory) => {
    setCategoryImage(images.filter((image) => image.category === newCategory));
  };

  return (
    <>
      <Header onCategoryChange={handleCategoryChange} />
      <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
        <ContainerCard>
          <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}></div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
    </>
  );
};

export default App;
