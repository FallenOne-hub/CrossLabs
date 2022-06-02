import '../../pages/tabs/Tab1.css'
import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { IonTextarea } from '@ionic/react'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

interface ContainerProps {
	xx: string[]
	yy: string[]
}

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Лабораторна робота №7',
		},
	},
}

const Graph: React.FC<ContainerProps> = ({ xx, yy }) => {
	const chartData = {
		labels: xx,
		datasets: [
			{
				label: 'Графік функції',
				data: yy,
				borderColor: 'rgb(0, 0, 200)',
				backgroundColor: 'rgba(0, 150, 50, 0.9)',
			},
		],
	}

	return (
		<IonTextarea>
			<Line options={options} data={chartData} />
		</IonTextarea>
	)
}

export default Graph