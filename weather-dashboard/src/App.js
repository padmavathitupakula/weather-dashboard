import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BarChartComponent from './components/BarChart';
import LineChartComponent from './components/LineChart';
import Dropdown from './components/Dropdown';
import { fetchData } from './api';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    const [data, setData] = useState([]);
    const [chartType, setChartType] = useState('bar');

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData.map((value, index) => ({ time: index, temperature: value })));
        };
        getData();
    }, []);

    return (
        <AppContainer>
            <Header />
            <Dropdown options={['bar', 'line']} selectedOption={chartType} onChange={setChartType} />
            {chartType === 'bar' ? <BarChartComponent data={data} /> : <LineChartComponent data={data} />}
        </AppContainer>
    );
};

export default App;