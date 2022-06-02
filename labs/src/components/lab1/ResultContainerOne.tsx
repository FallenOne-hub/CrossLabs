import { multiply } from "../../functions/calculations"
import '../../pages/tabs/Tab1.css'

interface ContainerProps {
    first: number
    second: number
    third: number
}

const ResultContainerOne: React.FC<ContainerProps> = ({ first, second, third }) => {
    const result = multiply(first, second, third)
    return (
        <div className="result-container">
            <h2>Результат: {result}</h2>
        </div>
    )
}

export default ResultContainerOne