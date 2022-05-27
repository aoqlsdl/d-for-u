import React from 'react';
import './App.css';
import FirstCategory from './components/FirstCategory'
import StudyCategory from './components/StudyCategory'
import BeginStep from './components/studies/BasicStep'
import BasicStep from './components/studies/BasicStep'
import AdvanceStep from './components/studies/AdvanceStep'
import FinalStep from './components/studies/FinalStep'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MaterialList from './components/materials/MaterialList';
import MaterialItem from './components/materials/MaterialItem';
import Test1 from './components/leveltests/Test1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstCategory />} />
        {/* 학습 */}
        <Route exact path="/study" element={<StudyCategory />} />
        <Route exact path="/study/begin" element={<BeginStep />} />
        <Route exact path="/study/basic" element={<BasicStep />} />
        <Route exact path="/study/advance" element={<AdvanceStep />} />
        <Route exact path="/study/final" element={<FinalStep />} />
        {/* 연습 */}

        {/* 자료방 */}
        <Route exact path="/material" element={<MaterialList />} />
        <Route exact path="/material/*" element={<MaterialItem />} />
        {/* 레벨테스트 */}
        <Route exact path="/leveltest" element={<Test1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
