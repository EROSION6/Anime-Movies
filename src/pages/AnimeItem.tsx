import { Item } from '@/components/Item'
import { Info } from '@/components/Item/Info'
import { NewAnime } from '@/components/Item/NewAnime'
import { Button } from '@/components/UI/Button'
import '@/styles/index.scss'
import { CirclePlus } from 'lucide-react'

export const AnimeItem = () => {
	return (
		<div className={`w-[1280px] mt-16 ${'home'} flex gap-8`}>
			<div className=''>
				<Item />
				<Button styles='flex items-center gap-2 mt-4 font-semibold'>
					<CirclePlus color='white' size={20} />
					Добаить в изобранное
				</Button>

				{/* new products */}

				<NewAnime />
			</div>
			<div>
				<Info />
			</div>
		</div>
	)
}
