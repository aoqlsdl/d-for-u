import React from 'react';
import './App.css';
import FirstCategory from './components/FirstCategory';
import StudyCategory from './components/StudyCategory';
import BeginStep from './components/studies/BeginStep';
import BasicStep from './components/studies/BasicStep';
import AdvanceStep from './components/studies/AdvanceStep';
import FinalStep from './components/studies/FinalStep';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MaterialList from './components/materials/MaterialList';
import MaterialItem from './components/materials/MaterialItem';
import Test1 from './components/leveltests/Test1';
import Begin1 from './components/studies/Begin1';
import Begin2 from './components/studies/Begin2';
import Begin3 from './components/studies/Begin3';
import Begin4 from './components/studies/Begin4';
import Kiosk from './components/kiosk';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<FirstCategory />} />
				<Route exact path="/kiosk/*" element={<Kiosk />} />
				{/* 학습 */}
				<Route exact path="/study" element={<StudyCategory />} />
				<Route exact path="/study/begin" element={<BeginStep />} />
				<Route exact path="/study/begin/1" element={<Begin1 />} />
				<Route exact path="/study/begin/2" element={<Begin2 />} />
				<Route exact path="/study/begin/3" element={<Begin3 />} />
				<Route exact path="/study/begin/4" element={<Begin4 />} />
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
