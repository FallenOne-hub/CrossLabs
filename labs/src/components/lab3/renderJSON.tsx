import ResultContainerLabThree from './ResultContainerLabThree'

const RenderJSON = async () => {
	document.getElementById('resultLabThree')!.innerHTML = await ResultContainerLabThree()
}

export default RenderJSON