/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecursionService } from '../../classes/lab7/recursionService'
import { SeriesService } from '../../classes/lab7/seriesService'
import { TabService } from '../../classes/lab7/tabService'
import Graph from './graph'

interface ContainerProps {
	first: number
	second: number
	third: number
}

const xyPush = (res: number[], array: string[]): void => {
	for (const e of res) {
		array.push(e.toFixed(2).toString())
	}
}

const ResultLabSeven: React.FC<ContainerProps> = ({ first, second, third }) => {
	const xx1: string[] = []
	const yy1: string[] = []

	const tabService = new TabService()
	const seriesService = new SeriesService()
	const recursionService = new RecursionService()

	const res1X = Array.from(tabService.getTab(first, second, third).keys())
	const res1Y = Array.from(tabService.getTab(first, second, third).values())

	xyPush(res1X, xx1)
	xyPush(res1Y, yy1)

	return (
		<div>
			<Graph xx={xx1} yy={yy1} />
			<Graph xx={xx1} yy={yy1} />
			<Graph xx={xx1} yy={yy1} />
			<div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
				<div style={{ 'display': 'flex' }}>
					<h2 style={{ 'marginRight': '15px' }}>Tab:</h2>
					<p style={{ 'marginRight': '15px' }}>{res1X.map((e, i) => (<p key={i}>x = {e.toFixed(2)}</p>))}</p>
					<p style={{ 'marginRight': '45px' }}>{res1Y.map((e, i) => (<p key={i}>y = {e.toFixed(2)}</p>))}</p>
				</div>
				<div style={{ 'display': 'flex' }}>
					<h2 style={{ 'marginRight': '15px' }}>Series:</h2>
					<p style={{ 'marginRight': '15px' }}>{res1X.map((e, i) => (<p key={i}>x = {e.toFixed(2)}</p>))}</p>
					<p style={{ 'marginRight': '45px' }}>{res1Y.map((e, i) => (<p key={i}>y = {e.toFixed(2)}</p>))}</p>
				</div>
				<div style={{ 'display': 'flex' }}>
					<h2 style={{ 'marginRight': '15px' }}>Recursion:</h2>
					<p style={{ 'marginRight': '15px' }}>{res1X.map((e, i) => (<p key={i}>x = {e.toFixed(2)}</p>))}</p>
					<p>{res1Y.map((e, i) => (<p key={i}>y = {e.toFixed(2)}</p>))}</p>
				</div>
			</div>
		</div>
	)
}

export default ResultLabSeven