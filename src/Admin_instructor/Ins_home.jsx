import React from 'react'
import FeaturedInfo from '../AdminpanelComponents/FeaturedInfo'
import { BarChart } from '@mui/x-charts/BarChart';
import "../AdminPanelPages/adminHome.css"

function Ins_home() {
    return (
        <div>
            <FeaturedInfo />
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={1000}
                height={300}
            />
        </div>
    )
}

export default Ins_home;