import { calculateRange } from "../../functions/calculations"
import '../../pages/tabs/Tab1.css'

interface ContainerProps {
    first: number
    second: number
}

const ResultContainerTwo: React.FC<ContainerProps> = ({ first, second }) => {
    const result = calculateRange(first, second)
    return (
        <div className="result-container">
            <h2>Результат: {result}</h2>
        </div>
    )
}

export default ResultContainerTwo