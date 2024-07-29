import { Movies } from '@/components/Movies/Movies'
import '@/styles/index.scss'

export const Home = () => {
	return (
		<div className={`w-[1280px] ${'home'}`}>
			<Movies />
		</div>
	)
}
