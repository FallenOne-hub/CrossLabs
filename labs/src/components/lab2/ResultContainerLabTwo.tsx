import { tabulate } from '../../functions/labTwo.functions'
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
	first: number
	second: number
	third: number
	fourth: number
}

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'MyChart',
		},
	},
}

const ResultContainerLabTwo: React.FC<ContainerProps> = args => {
	const { first, second, third, fourth } = args
	const { data, xx, yy } = tabulate(first, second, third, fourth)

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
			<div>{data.map(e => (<h2>{e}</h2>))}</div>
		</IonTextarea>
	)
}

export default ResultContainerLabTwo