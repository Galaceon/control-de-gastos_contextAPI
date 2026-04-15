import { categories } from "../data/cagories";

export default function FIlterByCategory() {
	return (
		<div className="bg-white shadow-lg rounded-lg  p-10">
			<form>
				<div className="flex flex-col md:flex-row md:items-center gap-5">
					<label htmlFor="category">Filtrar Gastos</label>
					<select 
						id="category"
						className="bg-slate-200 p-3 flex-1 rounded-lg"
					>
						<option value="">-- Todas las Categorías --</option>
						{categories.map(category => (
							<option 
								value={category.id}
								key={category.id}
							>
								{category.name}
							</option>
						))}
					</select>
				</div>
			</form>
		</div>
	)
}
